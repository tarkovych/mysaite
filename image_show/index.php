
<?php 
$page_Name='ГОЛОВНА'  ; 
require_once 'pages/header.php' ; 
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


<!-- <a href="img/1.png" rel="lightbox" align="Center" border="0">rrrrrrr</a> -->
<?php require_once 'pages/footerJS.php' ; ?>



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





