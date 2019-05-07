<?php

session_start();
if (!isset($_SESSION['picture'])) {
  $_SESSION['picture'] = 0;
}

 require_once 'php/connection.php' ; 
// $dbconnect = mysql_connect ($dbhost, $dbusername, $dbpass);
// if (!$dbconnect) { echo ("Не могу подключиться к серверу базы данных!"); }
// if(@mysql_select_db($dbname)) { echo "Подключение к базе $dbname установлено!"; }
// else die ("Не могу подключиться к базе данных $dbname!"); 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);
mysqli_query($link ,'SET NAMES utf8');
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
<p class="text-secondary" id="version">version 1.1</p>
	<div class="row">
    	<div class="col-xl-4 col-lg-6" >
				<form action="" id="FormAction" method="post">
					<div id="tableBuild" class="" ></div>	
					<div id="massResult" ></div>
					<!-- <input type="button" class="btn btn-outline-primary btnMY" onclick="result()" id="searchBtn" value="ПОКАЗАТЬ"> 
					<input type="button" class="btn btn-outline-primary btnMY" onclick="nazat()" id="resetBtn" value="СБРОС"> -->
					<div class="row">
						<div class="col-6 ">
							<input 
							type="button" 
							class="btn btn-outline-primary " 
							onclick="RESULT()" id="searchBtn" 
							value="SHOW" 
							style="width:200px">
						</div>
						<div class="col-6 ">
							<input 
							type="submit" 
							class="btn btn-outline-primary " 
							onclick="" 
							id="resetBtn" 
							value="RESET" 
							style="width:200px">
						</div>
					</div>
				</form>
		</div>
    	<div class="col-xl-8 col-lg-6">
			<div id="PICTURE"  class=''>
			</div>
			<div class="align-bottom" >
			<!-- *************** -->
								<nav aria-label="Page navigation example">
									<ul class="pagination" id="PAGIN" > 
									</ul>
								</nav>
			<!-- *************** -->
			</div>
		</div>
  	</div>

			
				
</div>


	<?php require_once 'pages/footerJS.php' ; ?>



	<script  src="js/project.js"></script>
	<script>




	</script>
</body>
</html>





