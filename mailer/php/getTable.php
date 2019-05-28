<?php
require_once("connection.php");
$link = mysqli_connect($dbhost, $dbusername, $dbpass, $dbname);
ini_set('memory_limit', '1024M');
mysqli_query($link, 'SET NAMES utf8');
if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
$query="SELECT * FROM `projects`";
$result = mysqli_query($link, $query);
$aRR = [];
$row;
while ($row = mysqli_fetch_assoc($result)) {
   $aRR[] = $row;
}
echo json_encode( $aRR);
