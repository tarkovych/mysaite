
<?php 
$page_Name='ГОЛОВНА'  ; 
require_once 'pages/header.php' ; 
?>



<div class="container-fluid" >

<form class="was-validated">
<div class="d-flex justify-content-center">  
     
            <div class="col-md-6 mb-3">
                <label for="validationServer01">First name</label>
                <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <label for="validationServer01">First name</label>
                <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
            <div class="valid-feedback">
                Looks good!
            </div>
            </div>

        <div class="col-md-6 mb-3">
            <label for="validationTextarea">Textarea</label>
            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
        </div>

</div> 
</form> 


</div>



	<?php require_once 'pages/footerJS.php' ; ?>

</body>
</html>





