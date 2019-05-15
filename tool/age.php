<?php

$PageNumber=1 ; ////НОМЕР СТРАНИЦЫ
require_once 'comp/header.php' ; 
?>

<p class="text-secondary" id="version">version 1.0</p>
<div class="container-fluid" >


<h2>Age Maker v1.0</h2>
	<div>
		<input type="text" class="inp" id="qAge" placeholder="AGE" oninput='copy()'>
		<input type="text" class="inp" id="qHxAge" placeholder="HxAGE">
	</div>


<textarea type="text" class="inp2" id="table" placeholder="ВОЗРАСТЫ"></textarea>
<div display="block">
<button class = "button1"  onclick="result()">START</button>
<button class = "button1" onclick="reset()">RESET</button>	
<div>
	<input type="radio" name="rad" id='roro1' checked><label for='roro1'>GRID</label>
	<input type="radio" name="rad" id='roro2'><label for='roro2'>NUMERIC</label>
</div>
</div>
<p  onclick='saveD()' id="save" style="cursor:pointer">SAVE</p>

<textarea type="text" class="inp2" name="" id="result" placeholder="AGE" ></textarea>


</div>

<script type="text/javascript">

function reset(){
document.getElementById('qAge').value =''; 
document.getElementById('qHxAge').value =''; 
document.getElementById('table').value=''; 	
document.getElementById('result').value='';
color()
}
function copy() {
	color() ; 
	document.getElementById('qHxAge').value="Hx"+document.getElementById('qAge').value+"List" ; 
}
function result(){
	var one=document.getElementById('qAge').value ; 
	var two=document.getElementById('qHxAge').value ; 
	var res=document.getElementById('table').value; 
	var arrRes=res.split('\n') ;
	var art=[]; 
	for (var i = 0 ; i<arrRes.length ; i++) {
		art.push(arrRes[i].split('-') ); 
	}
	
	var arrResResRes='' ; 
	for (var i = 0 ; i<art.length ; i++) {
		if(art[i][0]!='' && art[i][1]!=''){
			if(document.getElementById('roro1').checked){
				arrResResRes+=`if (VALUE("${one}_r1_c1")>=${art[i][0]} && VALUE("${one}_r1_c1")<=${art[i][1]}) {ADD("${two}",${i+1});}\n` ; 
			}
			else{
				arrResResRes+=`if (VALUE("${one}")>=${art[i][0]} && VALUE("${one}")<=${art[i][1]}) {ADD("${two}",${i+1});}\n` ;
			}
					
		}

	}

	document.getElementById('result').value=`Begin Unverified Perl\n${arrResResRes}End Unverified`; 
	color() ; 
}
function saveD(){
 
	var res=document.getElementById('result').value;

	if(res!=''){
		navigator.clipboard.writeText(res)  
 			 .then(() => {
   				document.getElementById('save').innerHTML='OK' ;
  				})
  			.catch(err => {
    			document.getElementById('save').innerHTML='ERROR' ;
  			});
		}else{
		alert('NOT FAUND') ; 
	}
}

function color(){
var res=document.getElementById('result').value;
if(res!=''){
document.getElementById('save').style.color='blue' ; 
document.getElementById('save').innerHTML='SAVE' ;	
}
else{
	document.getElementById('save').style.color='silver' ;
	document.getElementById('save').innerHTML='SAVE' ;	
}

}
</script>

<style type="text/css">
	
	body{
		background-color:silver; 
	}

	.inp{
		display: inline ; 
		width: 300px ; 
		height: 50px ; 
		border: solid black 2px ; 
		font-size: 18px ; 
		font-family: Geneva, Arial, Helvetica, sans-serif;
	}
	.inp2{
		display: inline ; 
		width: 1000px ; 
		height: 200px ; 
		border: solid black 2px ; 
		font-size: 18px ; 
		font-family: Geneva, Arial, Helvetica, sans-serif;
	}
	.button1{
		display: inline ; 
		width: 300px ; 
		height: 50px ; 
		border: solid black 2px ; 
		font-size: 18px ; 
		font-family: Geneva, Arial, Helvetica, sans-serif;

	}
	p{
		font-size: 18px ; 
		font-family: Geneva, Arial, Helvetica, sans-serif;
	}
</style>



<?php require_once 'comp/footerJS.php' ; ?>

<script>
</script>



</body>
</html>