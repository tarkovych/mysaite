<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once '../connection.php';


$uid = $_POST['uid']; 
$iter = $_POST['iter']; 
$numberDish= $_POST['numberDish'] ; 
$nameDish = $_POST['nameDish'] ;

if(isset($uid) && isset($iter)){
    $query = "INSERT INTO `dish`(`uid`, `iter`, `numberDish`, `nameDish`) VALUES (\"$uid\",\"$iter\",\"$numberDish\",\"$nameDish\")";

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