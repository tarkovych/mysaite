<?php
 require_once 'php/connection.php' ; 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);
ini_set('memory_limit', '1024M');
mysqli_query($link ,'SET NAMES utf8');
if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
} 

$SCAT =  ((isset($_POST['SCAT']))  ? $_POST['SCAT']  : 0);
$WORD =  ((isset($_POST['WORD'])) ?  $_POST['WORD'] : 0);

 

$query = "SELECT * FROM `ObjValue` WHERE $SCAT LIKE '%$WORD%' LIMIT 10" ; 
$result = mysqli_query($link,$query);

$row_set= array();   
$xx=0 ; 
while($row = mysqli_fetch_assoc($result))
{
    $row_set[] = $row[$SCAT];

}

echo json_encode($row_set); 
