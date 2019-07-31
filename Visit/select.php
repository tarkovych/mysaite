<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once 'connection.php';
$uid = trim($_POST['uid'])*1 ; 
if(isset($uid)){
$query = "SELECT * FROM `visit1` WHERE uid=\"$uid\"";
$result = mysqli_query($link, $query);
$row = mysqli_fetch_assoc($result) ; 
echo json_encode($row) ; 
}else{
    echo "0" ; 
}







