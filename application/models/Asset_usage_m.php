<?php

class Asset_usage_m extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->asset_usage = 'TT_ASSET_USAGE';
    }

    public function save($data)
    {
        $this->db->insert($this->asset_usage, $data);
        return $this->db->affected_rows();
    }

    public function update($data, $id)
    {
        $this->db->where($id);
        $this->db->update($this->asset_usage, $data);
        return $this->db->affected_rows();
    }

    function delete($id)
    {
        $this->db->where($id);
        $this->db->delete($this->asset_usage);
    }

    public function get($where = 0)
    {
        $this->db->select("*", FALSE);
        $this->db->from("$this->asset_usage");

        if ($where)
            $this->db->where($where);
        return $this->db->get();
    }

}

?>
