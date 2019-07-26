<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once '../connection.php';


$uid = $_GET['uid']; 
$iter = $_GET['iter']; 

if(isset($uid) && isset($uid)){
echo $uid."UID<br>"; 
echo $iter."ITER<br>";; 
$iter2=$iter+1 ; 
    $query = "UPDATE `visit2` SET `complite`=1 WHERE `uid`=\"$uid\" AND `iter`=\"$iter\" "; 
    if(mysqli_query($link, $query)){
        echo "UPDATE TRUE <br>" ; 
        $query1 = "INSERT INTO `visit2`(`uid`, `iter`, `complite`) VALUES (\"$uid\",\"$iter2\",0)";
        if(mysqli_query($link, $query1)){
            echo "INSERT TRUE <br>" ;
             header("Location:https://web.brt.org.ua/Visit/visit/visit2.php?uid=$uid"); 
           }else {
            echo "INSERT FALSE <br>" ;
           }

    }else {
        echo "UPDATE FALSE <br>" ; 
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