<?php 
    $page_Name=[
    "title"=>["Home","ArrMacker","age maker","LINK MACKER"] , 
    "navbar"=>["HOME","ARR MAKER","AGE MAKER","LINK MAKER"] ,
    "action"=>["index.php","age.php","arr.php","link.php"]
]  ;
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">

             <title> <?php echo $page_Name["title"][$PageNumber]  ; ?></title>
 

<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary"> 
    <?php
        for($i=0 ; $i<count($page_Name["navbar"]);$i++){
            $nav=$page_Name["navbar"][$i] ; 
            $act=$page_Name["action"][$i] ;
             echo "<a class=\"navbar-brand\" href=\" $act\">$nav</a>" ;
        }  
 ?>

</nav>