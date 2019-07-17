<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once 'connection.php';
$uid = trim($_POST['uid'])*1 ; 
$name = trim($_POST['name']) ; 
$telephone = trim($_POST['telephone']) ; 
if(isset($uid) && isset($name) && isset($telephone)){
$query = "INSERT INTO `visit1`(`uid`, `name`, `telephone`) VALUES (\"$uid\",\"$name\",\"$telephone\")";
if(mysqli_query($link, $query)){
    echo "1" ; 
}else {
    echo "0" ; 
}
}







