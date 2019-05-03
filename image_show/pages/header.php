<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title><?php  echo $page_Name ; ?></title>

	<!-- <link rel="stylesheet" type="text/css" href="css/lightbox.css"> -->
  <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">  -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/mystyle.css">
  <link rel="stylesheet" href="css/mystyle2.css">
  <link rel="stylesheet" href="css/ipsos.css">
    
</head>
<body>




<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="index.php">
    ГОЛОВНА
  </a>
  <a class="navbar-brand" href="program.php">
    ADMIN
  </a> 

<div class="flag-ua" id="FLAG_ID" >
</div>

</nav>

<style>
  #FLAG_ID {
    background-size: 34px;
    background-position: 15px center;
    background-repeat: no-repeat;
    padding: 15px 0 15px 64px;
  }
.ru{
  display:none ; 
}
.en{
  display:none ; 
}
.ua{
  
}
</style>

<script>
let massFlag=["ua","ru","en"] ; 
let div_flag=document.getElementById("FLAG_ID") ; 
div_flag.onclick=function (){
let Arrflag=div_flag.className.split('-') ; 
Arrflag[1]==massFlag[0]?div_flag.className="flag-"+massFlag[1]:
Arrflag[1]==massFlag[1]?div_flag.className="flag-"+massFlag[2]:
Arrflag[1]==massFlag[2]?div_flag.className="flag-"+massFlag[0]:0 ; 
lopster() ;
}

function lopster(){
  for(let i=0 ; i<massFlag.length;i++){

  if(div_flag.className=="flag-"+massFlag[i]){
   
    for(let j=0 ;j<document.getElementsByClassName(massFlag[i]).length; j++){
      try{
        document.getElementsByClassName(massFlag[i])[j].style.display="inline";
      }catch{
        console.log(document.getElementsByClassName(massFlag[i])[j]) ; 
      }
    }}
    else{
      for(let j=0 ; j<document.getElementsByClassName(massFlag[i]).length; j++){
        try{
        document.getElementsByClassName(massFlag[i])[j].style.display="none";
       }catch{
        console.log(document.getElementsByClassName(massFlag[i])[j]) ; 
      }
    }
    }
  }
}

window.onload=lopster() ;



</script>