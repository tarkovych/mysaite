<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
require_once '../connection.php';


$uid = $_GET['uid']; 

if(isset($uid) ){
echo $uid ; 
    $query = "SELECT * FROM `visit2` WHERE `uid`= \"$uid\" "; 
    $result = mysqli_query($link, $query);
    $firstCol=[] ; 
    while ($row = mysqli_fetch_assoc($result)) {
        $firstCol["uid"][]=$row["uid"];
        $firstCol["iter"][]=$row["iter"];
        $firstCol["complite"][]=$row["complite"];
      } 
print_r($firstCol) ; 
    if(count($firstCol)==0){
        $query1 = "INSERT INTO `visit2`(`uid`, `iter`, `complite`) VALUES (\"$uid\",\"1\",\"0\")";
        if(mysqli_query($link, $query1)){

               echo "1" ; 
               header("Location:http://web.brt.org.ua/diary_2019/cgi-bin/ciwweb.pl?studyname=diary_2019&uid=$uid&iter=1"); 

           }else {
               echo "0" ; 
           }
    }else{
        $iter = $firstCol["iter"][0] ; 
        foreach($firstCol["complite"] as $key=>$value){
            if($value==0){$iter = $firstCol["iter"][$key] ;}
            
        }
        header("Location:http://web.brt.org.ua/diary_2019/cgi-bin/ciwweb.pl?studyname=diary_2019&uid=$uid&iter=$iter"); 
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