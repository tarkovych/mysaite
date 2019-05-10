<?php
 require_once 'php/connection.php' ; 
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
<p class="text-secondary" id="version">version 1.2</p>
	<div class="row">
	
    	<div class="col-xl-4 col-lg-6" >
<!-- //////////////////////////////new//////////////// -->

							<div class="custom-control custom-switch">
										<input type="checkbox" class="custom-control-input" id="customSwitch1" >
										<label class="custom-control-label" for="customSwitch1">
											<span class="ru">Одиночный поиск</span>
											<span class="ua">Одиночний пошук</span>
											<span class="en">Single search</span>
										</label>
							</div>

<!-- ////////////////////form - gooogle//////////////////////// -->

							<form action="" id="FormGoogle" method="post">
								<div class="row">
									<div class="col-4">
									<select name="SCAT" id="SCAT" class="w-100 custom-select" >
												<option value="">ERROR</option>
										</select>
									</div>
									<div class="col-8 ">
<!-- ////////////////////////-->
									<!-- Example single danger button -->
									<div class="btn-group">
																<!-- <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
																<input type="text" class="form-control w-100 dropdown-toggle" id="WORD" name="WORD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<div class="dropdown-menu" id ="DROP">
																
																</div>
															</div>
															
									<!-- /////////////////////// -->
									</div>

								</div>
							<div class="row">
								<div class="col" id="AjaxResult" style="height:50px">
								</div>
							</div>


							<div class="row">
								<div class="col">
											<input 
												type="button" 
												class="btn btn-outline-primary " 
												onclick="RESULT2()" id="searchBtn" 
												value="SHOW" 
												style="width:200px">
								</div>
								<div class="col">
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
			<!-- ////////////////////new -->
<!--///////////////// form - filter /////////////////////////////-->
				<form action="" id="FormAction" method="post">

					<div id="Rozetka">
							<div id="tableBuild" class=""></div>	
							<div id="massResult" ></div>
					</div>
					<div class="row">
						<div class="col-6 ">
							<input 
							type="button" 
							class="btn btn-outline-primary " 
							onclick="RESULT(0)" id="searchBtn" 
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
			</div>

				</form>
				
<!--///////////////// form - filter /////////////////////////////-->
<!--///////////////// image /////////////////////////////-->

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
document.getElementById("customSwitch1").onclick=function (){CatSwich();}
 
CatSwich() ;
function CatSwich(){
let swich=document.getElementById("customSwitch1") ; 
if(swich.checked){
document.getElementById("FormAction").style.display="none" ; 
document.getElementById("FormGoogle").style.display="" ; 
}else{
document.getElementById("FormAction").style.display="" ; 
document.getElementById("FormGoogle").style.display="none" ; 
}
}

document.getElementById("SCAT").onchange=function (){
	var event = new Event('input');
	document.getElementById("WORD").dispatchEvent(event) ;
}
function DropDawn(value){
	document.getElementById("WORD").value=value; 
	var event = new Event('input');
	document.getElementById("WORD").dispatchEvent(event) ; 
}
</script>



</body>
</html>





