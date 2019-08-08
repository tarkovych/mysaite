<?php

namespace application\core;

class Router
{
    protected $routes = [];
    protected $params = [];

    function __construct()
    {
        $arr = require "application/config/routes.php";
        foreach ($arr as $key => $val) {
            $this->add($key, $val);
        }
        $this->run();
    }
    public function add($route, $params)
    {
        $route = '#^' . $route . '$#';
        $this->routes[$route] = $params;
    }
    public function match()
    {

        $url = trim($_SERVER['REQUEST_URI'], "/mvc");
        foreach ($this->routes as $route => $params) {
            if (preg_match($route, $url, $matches)) {
                $this->params = $params;
                return TRUE;
            }
        }
        return FALSE;
    }
    public function run()
    {
        if ($this->match()) {

            $path = "application\controllers\\" . ucfirst($this->params['controller']);
            $path .= "Controller";
            if (class_exists($path)) {
                $action = $this->params['action'] . "Action";
                if (method_exists($path, $action)) {
                    $controller  = new $path($this->params) ; 
                    
                    $controller->$action() ; 
                } else {
                    echo "ACTION NOT FOUD<br>" . $action;
                }
            } else {
                echo "CONTROLLER NOT FOUD<br>" . $path;
            };
        } else {
            echo "NOT FOUND 404";
        }
    }
}
