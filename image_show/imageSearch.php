<?php
require_once 'php/connection.php' ; 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);
mysqli_query($link ,'SET NAMES utf8');
if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
} 

$SCAT =  ((isset($_POST['SCAT'])) ? $_POST['SCAT'] : 0);
$WORD =  ((isset($_POST['WORD'])) ?  $_POST['WORD'] : 0);
 
$query = "SELECT * FROM `ObjValue` WHERE $SCAT = '$WORD'  " ; 
$result = mysqli_query($link,$query);
$aRR=[] ;
 
try {
    while($row = mysqli_fetch_assoc($result)){
        $aRR["uid"][]=$row["uid"] ; 
        $aRR["IMG"][]=$row["IMG"] ; 
    }
    echo json_encode($aRR);  
} catch (Exception $e) {
    echo 0 ; 
}

