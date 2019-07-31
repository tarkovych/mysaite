<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once '../connection.php';
$uid = $_GET['uid'];
$iter = $_GET['iter'];
$status = $_GET['status'];
if (STATUS($status, $link, $uid)) {
    header("Location:https://b.ipsos.com.ua/Visit/direct.php?uid=$uid");
} else {
    if (isset($uid) && isset($iter)) {
        $iter2 = $iter + 1;
        $query = "UPDATE `visit2` SET `complite`=1 WHERE `uid`=\"$uid\" AND `iter`=\"$iter\" ";
        if (mysqli_query($link, $query)) { 
            $query1 = "INSERT INTO `visit2`(`uid`, `iter`, `complite`) VALUES (\"$uid\",\"$iter2\",0)";
            if (mysqli_query($link, $query1)) {
               header("Location:https://b.ipsos.com.ua/Visit/direct.php?uid=$uid");
            } else {
                echo "INSERT FALSE <br>";
            }
        } else {
            echo "UPDATE FALSE <br>";
        }
    }
}
function STATUS($status, $link, $uid)
{
    if (isset($status) && isset($uid)) {
        $query = "UPDATE `visit1` SET `state`=\"$status\" WHERE `uid`=\"$uid\" ";
        if (mysqli_query($link, $query)) {
            return TRUE;
        } else {
           echo "UPDATE FALSE <br>";
            exit;
        }
    } else {
        return FALSE;
    }
}

?>

<?php


//$query = "INSERT INTO `visit1`(`uid`, `name`, `telephone`) VALUES (\"$uid\",\"$name\",\"$telephone\")";
//if(mysqli_query($link, $query)){
 //   echo "1" ; 
//}else {
//    echo "0" ; 
//}


//http://web.brt.org.ua/diary_2019/cgi-bin/ciwweb.pl?studyname=diary_2019&uid=VALUE&iter=VALUE
