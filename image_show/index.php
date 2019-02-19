<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>IMAGE</title>
		<link rel="stylesheet" href="css/mystyle.css">
		<!-- materilaze -->
		<!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/> -->
		
		  <!-- Bootstrap CSS -->
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

     


</head>
<body>
    
<?php 
require_once 'pages/header.php'
?>



<div class="container-fluid" >

						<!-- <table  cellpadding="0" cellspacing="0" width="360px" id="tableBuild" class='bord'></table>  -->
	<div class="row " >

		<div  class="col-4 " >
				<div id="tableBuild" class="" ></div>	
				<div id="massResult" ></div>
				<input type="button" class="btn btn-outline-primary btnMY" onclick="result()" id="searchBtn" value="ПОКАЗАТЬ"> 
				<input type="button" class="btn btn-outline-primary btnMY" onclick="nazat()" id="resetBtn" value="СБРОС">
			
				
				<!-- ************************* -->
				<br><br>
				<div class="custom-control custom-radio" >
  						<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"  onclick="temaVision() " >
 						 <label class="custom-control-label" for="customRadio1">Вертикальная прокрутка</label>
				</div>
				<div class="custom-control custom-radio">
 					 <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" onclick="temaVision()">
 					 <label class="custom-control-label" for="customRadio2">Горизонтальная прокрутка</label>
				</div>	
				<!-- ************************* -->



		</div>	
		<div class="col-8 dblock"  id="ShowImage" style="display:none">
					<div class="row dblock " ><?php require_once 'pages/galerea.php';?></div>  
					<div class="temaVision1" id="sl_image"></div>
					

				
		</div>
		

	</div>

</div>


</div>


<a href="img/1.png" rel="lightbox" align="Center" border="0">rrrrrrr</a>

<style type="text/css">

</style>

<script  src="https://code.jquery.com/jquery-3.3.1.min.js"  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="		crossorigin="anonymous">
</script>

<!-- <script type="text/javascript" src="js/materialize.min.js"></script> -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script  src="js/myArray.js"></script>
<script  src="js/spisok.js"></script>
<script  src="js/project.js"></script>
<script>
<script  src="js/lightbox.js"></script>

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





