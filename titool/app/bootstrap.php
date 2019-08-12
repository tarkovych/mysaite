<?php 
session_start();
include ROOT .DS.'app'.DS.'etc'.DS.'config.php'; 
include ROOT .DS.'app'.DS.'core'.DS.'DB.php';
include ROOT .DS.'app'.DS.'core'.DS.'Model.php';
function myAutoloader($class_name) {   
    include ROOT . DS.'app'.DS.'models'.DS.ucfirst($class_name) . '.php'; 
}
spl_autoload_register("myAutoloader");
include ROOT .DS.'app'.DS.'core'.DS.'Helper.php';
include ROOT .DS.'app'.DS.'core'.DS.'Controller.php';
include ROOT .DS.'app'.DS.'core'.DS.'Route.php';

Route::Start(); 
