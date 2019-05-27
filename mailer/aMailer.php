<?php
require_once("php/connection.php");
$link = mysqli_connect($dbhost, $dbusername, $dbpass, $dbname);
ini_set('memory_limit', '1024M');
mysqli_query($link, 'SET NAMES utf8');
if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
$table_sql = "CREATE TABLE `" . $_POST['time'] . "`(
    id INT(10) PRIMARY KEY, 
    uid VARCHAR(30) UNIQUE,
    email VARCHAR(100),
    succ int(1),
    onsucc int(1),
    overqta int(1)
    )";
$proj_name = $_POST['proj_name'];
$proj_link = $_POST['proj_link'];
$proj_sql = "INSERT INTO `projects`(`id`, `proj_name`, `proj_link`) VALUES (" . $_POST['time'] . ",\"$proj_name\",\"$proj_link\")";
if (!mysqli_query($link, $proj_sql)) {
    printf("Errormessage: %s\n", mysqli_error($link));
}
if (!mysqli_query($link, $table_sql)) {
    printf("Errormessage: %s\n", mysqli_error($link));
}
if (($h = fopen($_FILES['file']['tmp_name'], "r")) !== FALSE) {
    while (($data = fgetcsv($h, 10000, ",")) !== FALSE) {
        $query = "INSERT INTO `" . $_POST['time'] . "`(`id`, `uid`, `email`) VALUES ($data[0],$data[1],\"$data[2]\")";
        mysqli_query($link, $query);
    }
    fclose($h);
    move_uploaded_file($_FILES['file']['tmp_name'], "database/csv/".$_FILES["file"]["name"]);
}
