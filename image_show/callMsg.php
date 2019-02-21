
<?php 
$page_Name='ГОЛОВНА'  ; 
require_once 'pages/header.php' ; 
?>



<div class="container-fluid" >

<form class="was-validated">

        <div class="row p-2">
            <div class="col-4"></div>
            <div class="col-4 ">
                <input type="text" class="form-control is-valid" id="validationServer01" placeholder="Ваше имя" value="" required>
            </div>
           <div class="col-4"></div>
        </div>
     
        <div class="row p-2">
            <div class="col-4"></div>
            <div class="col-4 ">
                <input type="text" class="form-control is-valid" id="validationServer01" placeholder="Укажите ваш email" value="" required>
            </div>
           <div class="col-4"></div>
        </div>
        <div class="row p-2">
            <div class="col-4"></div>
            <div class=" col-4 ">
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Укажите неисправность" style="height:100px" required></textarea>
                <button type="button " class="btn btn-primary btn-lg text-center">Large button</button>
            </div>
            <div class="col-4"></div>
        </div>
</div> 
</form> 


</div>



	<?php require_once 'pages/footerJS.php' ; ?>

</body>
</html>





