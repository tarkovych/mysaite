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
    <div id="Table1" style="" class="mx-auto"></div>
    <div id="Table2" style="" class="mx-auto"></div>
    <div id="Table3" style="" class="mx-auto"></div>
    <div id="Table4" style="" class="mx-auto"></div>
</div>

<?php require_once 'pages/footerJS.php' ; ?>
<?php 
require_once 'ClassImg.php' ; 
$IMG->PIC($_GET['IMAGESHOW']) ; 
?>
<style>
.transform{
    transform: rotate(720deg);
    height
}
</style>
<script>
let proc=90 ; 

function Transform(){
let img=    document.getElementById("divIMG");

//var width = img.clientWidth;
//var height = img.clientHeight;

img.style.height=`${len}px` ;
img.style.transform=`rotate(${proc}deg)` ;
proc+=90 ; 
}




</script>
</body>
</html>


