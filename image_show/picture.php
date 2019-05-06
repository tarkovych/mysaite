<?php

if(!isset($_GET['IMAGESHOW'])){
	echo "not faund" ; 
	exit ; 
}

 require_once 'php/connection.php' ; 
// $dbconnect = mysql_connect ($dbhost, $dbusername, $dbpass);
// if (!$dbconnect) { echo ("Не могу подключиться к серверу базы данных!"); }
// if(@mysql_select_db($dbname)) { echo "Подключение к базе $dbname установлено!"; }
// else die ("Не могу подключиться к базе данных $dbname!"); 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);

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



<div class="container-fluid" >
    <div id="Pic" style=""></div>
    <span style="color:blue;cursor:pointer" onclick="Transform()"><a>Развернуть на 90</a></span>
    <div id="Lab" style="width:70% ;" ></div>

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





