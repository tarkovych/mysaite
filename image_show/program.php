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
<button onclick="startt()">start</button>
<button >Result</button>

<textarea id="aa" ></textarea>
<textarea id="bb" ></textarea>
<br>
<br>
<br>
<br>
<br>
<div id="one1"></div>
<div id="one2"></div>
<div id="one3"></div>



<style type="text/css">

</style>
<script  src="https://code.jquery.com/jquery-3.3.1.min.js"  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="		crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>





</body>
</html>

<script>

let one=["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"] ; 
let two=["B+B 1 / 6","B+B 1.5 / 6","B+B 2 / 6","B+B 2.5 / 6","B+B 1 / 6.5","B+B 1.5 / 6.5","B+B 2 / 6.5","B+B 2.5 / 6.5","B 0.2/6","B 0.2/3,"]; 
let one1=[] ;


function startt(){
   // document.getElementById("one1").innerHTML=one ; 
   // document.getElementById("one2").innerHTML=two ; 
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

  for(let u in c2){
      for(let ut in c2[u]){
        for(let uu in two){
         if(two[uu] == c2[u][ut]){c2[u][ut]=one[uu];}   
      }
    }
}
//document.getElementById("one1").innerHTML=c1[0].length ; 
//document.getElementById("one2").innerHTML=c2 ; 
    var yyy='' ; 
    for(let t in c2){
        for(let tt in c2[t]){

        if(c2[t][tt]==c1[t][tt]){yyy+='true,' ; }
  else{yyy+='false,' ; }
}
}
document.getElementById("one3").innerHTML=yyy; 
}







</script>