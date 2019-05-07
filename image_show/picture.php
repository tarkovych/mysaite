<?php
session_start();

if(!isset($_GET['IMAGESHOW'])){
	echo "not faund" ; 
	exit ; 
}

require_once 'php/connection.php' ; 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);
mysqli_query($link ,'SET NAMES utf8');


if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
} 
$uid=$_GET['IMAGESHOW'] ; 
$query = "SELECT * FROM `ObjValue` WHERE uid=$uid" ; 
$result = mysqli_query($link,$query);
$ROW=[] ;
 
 while($row = mysqli_fetch_assoc($result)){
        $ROW[]=$row; 
 }  

 $JSROW=json_encode($ROW); 
$page_Name=''  ; 
require_once 'pages/header.php' ; 
?>

<div class="container" >
    <div id="Pic" style=""></div>
    <span style="color:blue;cursor:pointer" onclick="Transform()" class="mx-auto">
        <a>
         <span class="ru">Развернуть на 90</span>
         <span class="ua">Розгорнути на 90</span>
         <span class="en">Expand by 90</span> 
        </a>
    </span>
    <div id="Lab" style="" class="mx-auto"></div>
</div>



<?php 
$prev='';
$next='';
if (!isset($_SESSION['picture'])) {
    $_SESSION['picture'] = 0;
  } else {
   $arrRed=$_SESSION['picture'];
  }
  $val= $_GET['IMAGESHOW'] ; 
  foreach($arrRed as $key=>$value){
      if($val==$value){
         if(isset($arrRed[$key-1])){$prev="<a href=\"picture.php?IMAGESHOW=".$arrRed[$key-1]."\"><<<<<<<".$arrRed[$key-1]."</a>";} 
         if(isset($arrRed[$key+1])){$next= "<a href=\"picture.php?IMAGESHOW=".$arrRed[$key+1]."\">".$arrRed[$key+1].">>>>>></a>" ;}
      }
  }
?>

<div class="row">
  <div class="col text-right"><?php echo  $prev;?></div>
  <div class="col text-left"><?php echo $next;?></div>
</div>



	<?php require_once 'pages/footerJS.php' ; ?>
<?php 

echo <<<EON
<script>
let ObjRow=$JSROW; 
</script>
<script src="js/picture.js"></script>
EON;
?>

<style>
.transform{
    transform: rotate(720deg);
}
</style>
<script>
let proc=90 ; 
function Transform(){
    let x = document.getElementById("imageTran").style ; 

   document.getElementById("imageTran").style.transform=`rotate(${proc}deg)` ; 
   proc+=90 ; 
}
</script>
</body>
</html>


