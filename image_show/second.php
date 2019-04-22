<?php
 require_once 'php/connection.php' ; 
// $dbconnect = mysql_connect ($dbhost, $dbusername, $dbpass);
// if (!$dbconnect) { echo ("Не могу подключиться к серверу базы данных!"); }
// if(@mysql_select_db($dbname)) { echo "Подключение к базе $dbname установлено!"; }
// else die ("Не могу подключиться к базе данных $dbname!"); 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);

if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
} 


    // Категория и цены
    $C1 =(isset($_GET['C1'])) ? $_GET['C1'] : 0;
    $C1a =(isset($_GET['C1a'])) ? $_GET['C1a'] : 0;
    $C2  =(isset($_GET['C2'])) ? $_GET['C2'] : 0;
    $r=implode(",", $C1) ; 
    $ra=implode(",", $C1a) ;

$query = "SELECT * FROM `ObjValue` WHERE C1 in ($r) AND  C1a in ($ra)" ; 
    $result = mysqli_query($link,$query);
    while($row = mysqli_fetch_assoc($result)){
        print_r($row['uid']) ; 
    }
    
     
    
