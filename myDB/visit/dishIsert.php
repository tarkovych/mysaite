<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once '../connection.php';


$uid =  $_POST['uid']; 
$iter = $_POST['iter']; 
$day =  $_POST['day'] ; 
$training = $_POST['training'] ;
$prepare = $_POST['prepare'] ;
$B1 = $_POST['B1'] ;
$B2 = $_POST['B2'] ;
$B6 = $_POST['B6'] ;

if(isset($uid) && isset($iter)){

    if(isset($day)){
        $query = "UPDATE `visit2` SET `day`=$day WHERE `uid`=\"$uid\" AND `iter`=\"$iter\" ";
    }
    if(isset($training)){
        $query = "UPDATE `visit2` SET `training`=$training WHERE `uid`=\"$uid\" AND `iter`=\"$iter\" ";
    }
    if(isset($prepare )){
        $query = "UPDATE `visit2` SET `prepare`=$prepare  WHERE `uid`=\"$uid\" AND `iter`=\"$iter\" ";
    }
    if(isset($B1 )){
        $query = "UPDATE `visit2` SET `B1`=$B1  WHERE `uid`=\"$uid\" AND `iter`=\"$iter\" ";
    }
    if(isset($B2)){
        $query = "UPDATE `visit2` SET `B2`=$B2  WHERE `uid`=\"$uid\" AND `iter`=\"$iter\" ";
    }
    if(isset($B6)){
        $query = "UPDATE `visit2` SET `B6`=\"$B6\"  WHERE `uid`=\"$uid\" AND `iter`=\"$iter\" ";
    }


    if($result = mysqli_query($link, $query)){
        echo "complite" ; 
    }else{
        echo "eror" ; 
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