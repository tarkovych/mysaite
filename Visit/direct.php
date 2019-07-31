<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once 'connection.php';


$uid = $_GET['uid'];


if (isset($uid) && !empty($uid)) {

    if (visit1($uid, $link)) {
        header("Location:https://b.ipsos.com.ua/IG9_MenuCheck_19/cgi-bin/ciwweb.pl?studyname=IG9_MenuCheck_19&uid=$uid");
    } else {

        $query = "SELECT * FROM `visit2` WHERE `uid`= \"$uid\" ";
        $result = mysqli_query($link, $query);
        $firstCol = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $firstCol["uid"][] = $row["uid"];
            $firstCol["iter"][] = $row["iter"];
            $firstCol["complite"][] = $row["complite"];
        }
        if (count($firstCol) == 0) {
            $query1 = "INSERT INTO `visit2`(`uid`, `iter`, `complite`) VALUES (\"$uid\",\"1\",\"0\")";
            if (mysqli_query($link, $query1)) {
                header("Location:https://b.ipsos.com.ua/diary_2019/cgi-bin/ciwweb.pl?studyname=diary_2019&uid=$uid&iter=1");
            } else {
                echo "0";
                exit ; 
            }
        } else {
            $iter = $firstCol["iter"][0];
            foreach ($firstCol["complite"] as $key => $value) {
                if ($value == 0) {
                    $iter = $firstCol["iter"][$key];
                }
            }
            header("Location:https://b.ipsos.com.ua/diary_2019/cgi-bin/ciwweb.pl?studyname=diary_2019&uid=$uid&iter=$iter");
        }
    }
} else {
    echo "<h1> UID NOT FOUND";
    exit;
}

function visit1($uid, $link)
{
    $query = "SELECT * FROM `visit1` WHERE `uid`= \"$uid\" ";
    $result = mysqli_query($link, $query);
    $firstCol = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $firstCol["uid"][] = $row["uid"];
        $firstCol["state"][] = $row["state"];
    }
    if (count($firstCol) == 0) {
        $query1 = "INSERT INTO `visit1`(`uid`,`state`) VALUES (\"$uid\",\"0\")";
        if (mysqli_query($link, $query1)) {
            return true;
        } else {
            echo "eror";
            exit;
        }
    } else {
        if ($firstCol["state"][0]==1) {
            return false;
        } else {
            return true;
        }
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
