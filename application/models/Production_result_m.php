<?php

class Production_result_m extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
    }

    public function getShop($where = 0)
    {
        $this->db->select("LOWER(CHR_SHOP_NAME) SHOP_LOWER, CHR_SHOP_NAME, CHR_GROUP_SHOP", FALSE);
        $this->db->from("DB_SAMARA.dbo.TM_SHOP");
        $this->db->order_by("CHR_GROUP_SHOP", "ASC");

        if ($where)
            $this->db->where($where);
        return $this->db->get();
    }

    public function getProdResult($prod_date)
    {
        $data = $this->db->query("SELECT ISNULL(SUM(INT_TOTAL_QTY),0) TOTAL, 
        REPLACE(CHR_SHOP_NAME,' ','') CHR_SHOP_NAME
        FROM TM_DIRECT_BACKFLUSH_GENERAL LINES 
        INNER JOIN DB_SAMARA.dbo.TM_SHOP SHOP ON LINES.INT_SHOP_ID = SHOP.INT_ID
		LEFT JOIN TT_PRODUCTION_RESULT PR ON LINES.CHR_WCENTER = PR.CHR_WORK_CENTER  
		AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$prod_date'
		AND INT_TOTAL_QTY <> 0 
        WHERE INT_LIVE = 1 
        GROUP BY CHR_SHOP_NAME");

        return $data;
    }

    public function getLineStop($prod_date)
    {
        $data = $this->db->query("SELECT ISNULL(SUM(INT_TOTAL_DURASI_LS/60),0) TOTAL, 
        REPLACE(CHR_SHOP_NAME,' ','') CHR_SHOP_NAME
        FROM TM_DIRECT_BACKFLUSH_GENERAL LINES
        INNER JOIN DB_SAMARA.dbo.TM_SHOP SHOP ON LINES.INT_SHOP_ID = SHOP.INT_ID
        LEFT JOIN TT_LINE_STOP_PROD PR ON LINES.CHR_WCENTER = PR.CHR_WORK_CENTER  
		AND LEFT(SUBSTRING(CHR_WO_NUMBER,8,8),4) + '-' + SUBSTRING(SUBSTRING(CHR_WO_NUMBER,8,8),5,2) + '-' + SUBSTRING(SUBSTRING(CHR_WO_NUMBER,8,8),7,2) = '$prod_date'
		AND INT_TOTAL_DURASI_LS <> 0 
        WHERE INT_LIVE = 1 
        GROUP BY CHR_SHOP_NAME");

        return $data;
    }

    public function getOee($prod_date)
    {
        $data = $this->db->query("SELECT REPLACE(CHR_SHOP_NAME,' ','') CHR_SHOP_NAME, 
                ROUND(AVG((
                (CONVERT(FLOAT, NULLIF(INT_PRODUCTION_RUNTIME,0)) / CONVERT(FLOAT, NULLIF(INT_PRODUCTION_TIME,0)) * 100) * 
                (CONVERT(FLOAT, INT_TOTAL_OK) / CONVERT(FLOAT, NULLIF(INT_TARGET_RUNTIME,0)) * 100 ) *
                (CONVERT(FLOAT, INT_TOTAL_OK) / CONVERT(FLOAT, NULLIF((INT_TOTAL_OK + INT_TOTAL_NG),0)) * 100 )
                )/ 10000),2) AS TOTAL
                FROM TM_DIRECT_BACKFLUSH_GENERAL LINES 
                INNER JOIN DB_SAMARA.dbo.TM_SHOP SHOP ON LINES.INT_SHOP_ID = SHOP.INT_ID
                LEFT JOIN  PRD.TM_PRODUCTION_ACTIVITY PR ON LINES.CHR_WCENTER = PR.CHR_WORK_CENTER 
                AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$prod_date' 
                WHERE INT_LIVE = 1 
                GROUP BY CHR_SHOP_NAME");

        return $data;
    }

    function getOeeDetail($shop, $prod_date)
    {
        $data = $this->db->query("SELECT CHR_WORK_CENTER, 
             ISNULL(ROUND(AVG((
                (CONVERT(FLOAT, NULLIF(INT_PRODUCTION_RUNTIME,0)) / CONVERT(FLOAT, NULLIF(INT_PRODUCTION_TIME,0)) * 100) * 
                (CONVERT(FLOAT, INT_TOTAL_OK) / CONVERT(FLOAT, NULLIF(INT_TARGET_RUNTIME,0)) * 100 ) *
                (CONVERT(FLOAT, INT_TOTAL_OK) / CONVERT(FLOAT, NULLIF((INT_TOTAL_OK + INT_TOTAL_NG),0)) * 100 )
                )/ 10000),2),0) AS TOTAL
            FROM TM_DIRECT_BACKFLUSH_GENERAL LINES 
            INNER JOIN DB_SAMARA.dbo.TM_SHOP SHOP ON LINES.INT_SHOP_ID = SHOP.INT_ID
            LEFT JOIN  PRD.TM_PRODUCTION_ACTIVITY PR ON LINES.CHR_WCENTER = PR.CHR_WORK_CENTER 
            AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$prod_date' 
            AND CHR_SHOP_NAME = '$shop' 
            WHERE INT_LIVE = 1 AND CHR_WORK_CENTER IS NOT NULL
            GROUP BY CHR_WORK_CENTER");

        return $data;
    }

    function get_activity_all_time($work_center, $date)
    {
        $query = $this->db->query("SELECT 1 no, 'Production Time' AS DESCRIPTION, SUM(INT_PRODUCTION_TIME)/60 AS DURATION, 'slave' AS STACK, '#6af770' AS COLOR FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'  
        UNION ALL 
        SELECT 2, 'Bridging & Break + 3S' , SUM(INT_PLANNED_DOWNTIME)/60 , 'slave', '#b4fab7' FROM PRD.TM_PRODUCTION_ACTIVITY WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'  
        ORDER BY no DESC");

        return $query;
    }

    function get_activity_availability($work_center, $date)
    {
        $query = $this->db->query("SELECT 1 no, 'Production Time' AS DESCRIPTION, SUM(INT_PRODUCTION_TIME)/60 DURATION, 'master' AS STACK, '#d60909' AS COLOR  FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'  
        UNION ALL 
        SELECT 3, 'Line Stop' , SUM(INT_UNPLANNED_DOWNTIME)/60 , 'slave', '#ff9e9e' FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'  
        UNION ALL 
        SELECT 2, 'Production Runtime' , SUM(INT_PRODUCTION_RUNTIME)/60 , 'slave', '#f73434' FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'  
        ORDER BY no DESC");

        return $query;
    }

    //must be update
    function get_activity_performance($work_center, $date)
    {
        $query = $this->db->query("SELECT 1 no, 'Target based CT' AS DESCRIPTION, SUM(INT_TARGET_RUNTIME) DURATION, 'master' AS STACK, '#025a9e' AS COLOR  FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'  
        UNION ALL 
        SELECT 3, 'Speed Loss' , SUM(INT_TARGET_RUNTIME) - (SUM(INT_TOTAL_OK) + SUM(INT_TOTAL_NG) ) , 'slave', '#b8e0ff' FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'   
        UNION ALL 
        SELECT 2, 'Actual Prod' , SUM(INT_TOTAL_OK) + SUM(INT_TOTAL_NG) , 'slave', '#3ca1f0' FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'   
        ORDER BY no DESC");

        return $query;
    }

    function get_activity_quality($work_center, $date)
    {
        $query = $this->db->query("SELECT 1 no, 'Actual Prod' AS DESCRIPTION, SUM(INT_TOTAL_OK) + SUM(INT_TOTAL_NG)  DURATION, 'master' AS STACK, '#ffc414' AS COLOR  FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'  
        UNION ALL 
        SELECT 3, 'Reject' , SUM(INT_TOTAL_NG) , 'slave', '#fce397' FROM PRD.TM_PRODUCTION_ACTIVITY 
        WHERE CHR_WORK_CENTER = '$work_center' 
        AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'   
        UNION ALL 
        SELECT 2, 'Net Actual Prod' , SUM(INT_TOTAL_OK) , 'slave', '#fcfc21' FROM PRD.TM_PRODUCTION_ACTIVITY
         WHERE CHR_WORK_CENTER = '$work_center' 
         AND LEFT(CHR_DATE,4) + '-' + SUBSTRING(CHR_DATE,5,2) + '-' + SUBSTRING(CHR_DATE,7,2) = '$date'   
         ORDER BY no DESC");

        return $query;
    }

    function get_line_stop_by_wc_and_date($work_center, $date){

        return $this->db->query("SELECT A.CHR_LINE_CODE, B.CHR_LINE_STOP, ROUND(CAST(SUM(CAST(INT_TOTAL_DURASI_LS AS FLOAT))/60 AS FLOAT),1) AS TOTAL_LINE_STOP
           FROM TT_LINE_STOP_PROD A
           LEFT JOIN TM_LINE_STOP B ON A.CHR_LINE_CODE = B.CHR_LINE_CODE
           WHERE CHR_WORK_CENTER = '$work_center' 
           AND LEFT(SUBSTRING(CHR_WO_NUMBER,8,8),4) + '-' + SUBSTRING(SUBSTRING(CHR_WO_NUMBER,8,8),5,2) + '-' + SUBSTRING(SUBSTRING(CHR_WO_NUMBER,8,8),7,2) = '$date'   
           GROUP BY A.CHR_LINE_CODE, B.CHR_LINE_STOP");
    }
}
