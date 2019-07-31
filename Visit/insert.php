<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once 'connection.php';
$uid = trim($_POST['uid'])*1 ; 
$name = trim($_POST['name']) ; 
$telephone = trim($_POST['telephone']) ; 
$data = trim($_POST['data']) ; 
if(isset($uid) && isset($name) && isset($telephone)){

//UPDATE `visit1` SET `id`=[value-1],`uid`=[value-2],`name`=[value-3],`telephone`=[value-4],`data`=[value-5],`state`=[value-6] WHERE 1

$query = "UPDATE `visit1` SET `name`=\"$name\",`telephone`=\"$telephone\",`data`=\"$data\" WHERE `uid`=\"$uid\" "  ; 
if(mysqli_query($link, $query)){
    echo "1" ; 
}else {
    echo "0" ; 
}
}







