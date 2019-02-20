 
<?php 
$page_Name='ПРОГРАМА' ; 
require_once 'pages/header.php'  ; 
?>
<div id="admin">444</div>
<script>
var adminPass =roboto ;  //prompt('Пароль Админа');
var php='?php' ; 
document.getElementById('admin').innerHTML=`<${php} echo 'hello'.${adminPass} ; ?>`; 



</script>




<?php 
if(empty($_GET['admin'])){
  echo "<h1>Вы не админ </h1>" ;
  exit() ;
}
else{
  if($_GET['admin']!=5555){
    echo "<h1>Вы не админ </h1>" ;
     exit() ; 
   }
}


?>




<textarea id="aa" class="rota"></textarea>
<textarea id="bb" class="rota"></textarea>

<button onclick="startt()">start</button>
<button >Result</button>
<br>
<br>
<br>
<br>
<br>
<div id="one1"></div>
<div id="one2"></div>
<div id="one3"></div>



<style type="text/css">
.rota{
  height:500px ; 
}
#one3{
  width:600px ; 
  border:solid black 1px ; 
}
</style>


<?php require_once 'pages/footerJS.php' ; ?>

<script>


function startt(){

  let x= document.getElementById("aa").value ; 
  let y= document.getElementById("bb").value ; 
  var t=x.split('\n') ;var c1=[] ; 
  var p=y.split('\n') ; var c2=[] ; 
  for(tt in t ){
     c1.push(t[tt].split('\t'))  ; 
     c2.push(p[tt].split('\t'))  ; 
  }
  for(tt in t ){
     c1.push(t[tt].split('\t'))  ; 
     c2.push(p[tt].split('\t'))  ; 
  }

    var yyy='' ; 
    for(let t in c2){
        for(let tt in c2[t]){

  if(c2[t][tt]==c1[t][tt]){yyy+=`<font color="green" size="2px"> true [${t*1+1}][${tt*1+1}]</font>  , ` ; }
  else{yyy+=`<font color="red" ><b> false [${t*1+1}][${tt*1+1}]</b></font> , ` ; }
}
}
document.getElementById("one3").innerHTML=yyy; 
}

</script>


</body>
</html>