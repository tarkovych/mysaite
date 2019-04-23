<?php
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


$page_Name='ГОЛОВНА'  ; 
require_once 'pages/header.php' ; 
?>



<div class="container-fluid" >
	<div class="row " >
		<div  class="col-4 " >
			<form action="" id="FormAction" method="post">

				<div id="tableBuild" class="" ></div>	
				<div id="massResult" ></div>
				<!-- <input type="button" class="btn btn-outline-primary btnMY" onclick="result()" id="searchBtn" value="ПОКАЗАТЬ"> 
				<input type="button" class="btn btn-outline-primary btnMY" onclick="nazat()" id="resetBtn" value="СБРОС"> -->
				<input type="button" class="btn btn-outline-primary btnMY" onclick="RESULT()" id="searchBtn" value="ПОКАЗАТЬ"> 
				<input type="button" class="btn btn-outline-primary btnMY" onclick="" id="resetBtn" value="RE">
				</form>
				
				<!-- ************************* -->
				<br><br>
				<div class="custom-control custom-radio" >
  						<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"  onclick="temaVision() " checked>
 						 <label class="custom-control-label" for="customRadio1">Горизонтальная прокрутка</label>
				</div>
				<div class="custom-control custom-radio">
 					 <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" onclick="temaVision()">
 					 <label class="custom-control-label" for="customRadio2">Вертикальная прокрутка</label>
				</div>	
				<!-- ************************* -->
		</div>	
		<div class="col-8 dblock"  id="ShowImage" style="display:none">
					<div class="row dblock " ><?php require_once 'pages/galerea.php';?></div>  
					<div class="temaVision1" id="sl_image"></div>
					

				
		</div>
		

	</div>

</div>
<a href="#" id="CSV" download="game.csv">nnnn</a>


	<?php require_once 'pages/footerJS.php' ; ?>
	<script  src="js/project.js"></script>
	<script>
		function temaVision(){
			
			if(document.getElementById("customRadio1").checked){
				document.getElementById("sl_image").className="temaVision1" ; 
				
			}else{
				document.getElementById("sl_image").className="temaVision2" ; 
				
			}
		}
		temaVision() ; 
	</script>
</body>
</html>





