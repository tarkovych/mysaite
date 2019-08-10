<h1> HELLOOOO WORLD <h1>

<?php 

foreach($vars['news'] as $key=>$val){
    echo "<h2>".$val['title']."</h2><p>".$val['text']."</p>" ; 
}


?>