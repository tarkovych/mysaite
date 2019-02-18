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

		<div  class="col-4 border" >
				<div id="tableBuild" class="border" ></div>	
				<div id="massResult" ></div>
				<input type="button" class="btn btn-outline-primary btnMY" onclick="result()" id="searchBtn" value="ПОКАЗАТЬ"> 
				<input type="button" class="btn btn-outline-primary btnMY" onclick="nazat()" id="resetBtn" value="СБРОС">
		</div>	
		<div class="col-8 dblock"  >
					<div class="row dblock "><?php require_once 'pages/galerea.php';?></div>  
					<div class="" id="sl_image"></div>

				
		</div>
		

	</div>

</div>





	<!-- <div class="divTable bord" >
			<table  cellpadding="0" cellspacing="0" width="" align="left" class='bord'>
				<tr>
					<td>

					</td>
				</tr>
				<tr>
					<td> <div id="massResult"></div> </td>
				</tr>
				<tr>
					<td> 
						
				 </td>
				</tr>
			</table>
			</div>
				<div class="divTable" >
					<div class="home">
						<div class="demo-gallery" id="mainDiv">
							<ul id="lightgallery" class="list-unstyled row"></ul>
				</div>	  
			</div>
	</div> -->

</div>




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




</script>




</body>
</html>





