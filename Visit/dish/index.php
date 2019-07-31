<?php 


//include ROOT . '/app/bootstrap.php';
//echo ROOT . 'dish/index.php'
require_once "../connection.php";
require_once "../comp/nav.php" ; 

$uid =      isset($_GET['uid'])?$_GET['uid']:0 ; 
$iter =     isset($_GET['iter'])?$_GET['iter']:0 ;  
$B6iter=    isset($_GET['B6iter'])?$_GET['B6iter']:0 ;  
$data =     isset($_GET['data'])?$_GET['data']:0 ; 

echo <<<EON
<script>
var uid = "$uid"  ; 
var iter = "$iter" ; 
var B6iter = "$B6iter"  ; 
var data = "$data" ; 

</script>
EON;
?>


<script>
</script>

<div class="container">
    <div id = "root">

    </div>
</div>


<script>
alert(uid) ; 
$.post('b.ipsos.com.ua/myDB/ScanDir.php',{uid:uid,iter:iter , B6iter:B6iter,data:data}, function (request) {			 
console.log(request) ; 
alert(uid) ; 
});


</script>
<?php 
require_once ROOT."../comp/footer.php" ; 
?>

