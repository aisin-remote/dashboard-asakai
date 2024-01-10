<?php

class User_m extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->user = 'TM_USER';
    }

    public function save($data)
    {
        $this->db->insert($this->user, $data);
        return $this->db->affected_rows();
    }

    public function update($data, $id)
    {
        $this->db->where($id);
        $this->db->update($this->user, $data);
        return $this->db->affected_rows();
    }

    function delete($id)
    {
        $this->db->where($id);
        $this->db->delete($this->user);
    }

    public function get($where = 0)
    {
        $this->db->select("*", FALSE);
        $this->db->from("$this->user");

        if ($where)
            $this->db->where($where);
        return $this->db->get();
    }

}

?>
