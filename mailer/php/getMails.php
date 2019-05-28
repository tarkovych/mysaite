<?php
require_once("connection.php");

$tableid=$_POST['tablename'];
$query="SELECT `uid`,`email`,`succ`,`nonsucc`,`overqta` FROM `$tableid`";
$result = mysqli_query($link, $query);
$aRR = [];
$row;
while ($row = mysqli_fetch_assoc($result)) {
   $aRR[] = $row;
}
echo json_encode($aRR);
