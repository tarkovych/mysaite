<?php

$dbhost = "localhost"; // Имя хоста БД
$dbusername ="ipsos-db"; // Пользователь БД
$dbpass = "RA2vy42pWF3HRx9S"; // Пароль к базе
$dbname = "ipsos-db_myDB"; // Имя базы


$link = mysqli_connect($dbhost, $dbusername, $dbpass, $dbname);
ini_set('memory_limit', '1024M');
mysqli_query($link, 'SET NAMES utf8');
if (!$link) {
	echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
	echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
	echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
	exit;
}


?>