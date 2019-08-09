<?php
namespace application\core ; 



 class View {


    public $path; 
    public $route ; 
    public $layout = "default"; 

    public function __construct($route){
        $this->route = $route ;
        $this->path = $route['controller'].DS.$route['action'] ;
       //debug($this->path) ;
      
    }
    public function render($title,$vars=[]){

        ob_start() ;
        require "application".DS."views".DS.$this->path.".php"; 
        $content = ob_get_clean(); 
        require "application".DS."views".DS."layouts".DS.$this->layout.".php" ; 
    }
}
