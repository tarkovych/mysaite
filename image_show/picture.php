<?php

if(!isset($_GET['IMAGESHOW'])){
	echo "not faund" ; 
 	exit ; 
 }
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

<div class="row">
</div>

<?php require_once 'pages/footerJS.php' ; ?>
<?php 
require_once 'ClassImg.php' ; 
$IMG->PIC($_GET['IMAGESHOW']) ; 
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


