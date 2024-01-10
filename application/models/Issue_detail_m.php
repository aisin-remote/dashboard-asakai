<?php

class Issue_detail_m extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->issue_detail = 'TT_ISSUE_DETAIL';
    }

    public function save($data)
    {
        $this->db->insert($this->issue_detail, $data);
        return $this->db->insert_id();
    }

    public function update($data, $id)
    {
        $this->db->where($id);
        $this->db->update($this->issue_detail, $data);
        return $this->db->affected_rows();
    }

    function delete($id)
    {
        $this->db->where($id);
        $this->db->delete($this->issue_detail);
        return $this->db->affected_rows();
    }

    public function get($where = 0)
    {
        $this->db->select("INT_ID,  CONVERT(VARCHAR, DAT_CREATED_AT, 100) DAT_CREATED_AT, CHR_CAPTION, CHR_PATH, REPLACE(CHR_PATH,'/var/www/aisin-web','') CHR_IMAGE,REPLACE(CHR_PATH,'/var/www/aisin-web/image/asakai/','') CHR_NAME", FALSE);
        $this->db->from("$this->issue_detail");

        if ($where)
            $this->db->where($where);
        return $this->db->get();
    }

}

?>
