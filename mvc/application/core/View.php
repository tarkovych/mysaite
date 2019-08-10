<?php

namespace application\core;



class View
{


    public $path;
    public $route;
    public $layout = "default";

    public function __construct($route)
    {
        $this->route = $route;
        $this->path = $route['controller'] . DS . $route['action'];
        //debug($this->path) ;

    }
    public function render($title, $vars = [])
    {

        extract($vars);
        if (file_exists("application" . DS . "views" . DS . $this->path . ".php")) {

            ob_start();
            require "application" . DS . "views" . DS . $this->path . ".php";
        } else {
            echo "VIEW NOT FOUND";
        }

        $content = ob_get_clean();
        require "application" . DS . "views" . DS . "layouts" . DS . $this->layout . ".php";
    }
    public static function errorCode($code)
    {
        http_response_code($code);
        require "application" . DS . "views" . DS . "errors" . DS . $code . ".php";
        exit;
    }
    public function redirect($url)
    {
        header('location:' . $url);
        exit;
    }
}
