<?php

class Issue_m extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->issue = 'TT_ISSUE';
        $this->issue_detail = 'TT_ISSUE_DETAIL';
    }

    public function save($data)
    {
        $this->db->insert($this->issue, $data);
        return $this->db->insert_id();
    }

    public function update($data, $id)
    {
        $this->db->where($id);
        $this->db->update($this->issue, $data);
        return $this->db->affected_rows();
    }

    function delete($id)
    {
        $this->db->where($id);
        $this->db->delete($this->issue);
    }

    public function get($where = 0)
    {
        $this->db->select("*, ISNULL(CHR_MODIFIED_BY,CHR_CREATED_BY) AS CHR_LAST_CREATED_BY,
        REPLACE(CHR_ISSUE,'<br>','\n') CHR_ISSUE_FORMAT,
        REPLACE(CHR_CURR_PREVENTIVE,'<br>','\n') CHR_CURR_PREVENTIVE_FORMAT,
        REPLACE(CHR_YOKOTEN,'<br>','\n') CHR_YOKOTEN_FORMAT,
        REPLACE(CHR_PERMANENT_ACTIVITY,'<br>','\n') CHR_PERMANENT_ACTIVITY_FORMAT,
        REPLACE(CHR_TEMP_ACTION,'<br>','\n') CHR_TEMP_ACTION_FORMAT
        ", FALSE);
        $this->db->from("$this->issue");
        $this->db->order_by("DAT_CREATED_AT", "DESC");

        if ($where)
            $this->db->where($where);
        return $this->db->get();
    }

   
}
