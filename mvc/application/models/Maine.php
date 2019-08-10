<?php 

namespace application\models ; 
use application\core\Model;

class Maine extends Model {
  public function  getNews(){
   $resault = $this->db->row("SELECT * FROM `news`") ;
   return $resault ; 
  }
}