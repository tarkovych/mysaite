
<?php
$page_Name = 'ГОЛОВНА';
require_once 'pages/header.php';
?>



<div class="container-fluid" >

    <form class="was-validated"  method='POST' action="php/mail.php"  enctype="multipart/form-data" >

        <div class="row p-2">
            <div class="col-4"></div>
            <div class="col-4 ">
                <input name='call_name' type="text" class="form-control is-valid" id="validationServer01" placeholder="Ваше имя" value="" required>
            </div>
            <div class="col-4"></div>
        </div>

        <div class="row p-2">
            <div class="col-4"></div>
            <div class="col-4 ">
                <input type="text" name='call_email' class="form-control is-valid" id="validationServer01" placeholder="Укажите ваш email" value="" required>
            </div>
            <div class="col-4"></div>
        </div>
        <div class="row p-2">
            <div class="col-4"></div>
            <div class=" col-4 ">
                <textarea name='call_msg' class="form-control is-invalid" id="validationTextarea" placeholder="Укажите неисправность" style="height:100px" required></textarea>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="validatedCustomFile" name="upload"> 
                    <label class="custom-file-label mt-2" for="validatedCustomFile" >Choose file...1</label>
                </div>        
            </div>
            <div class="col-4"></div>
        </div>
        <div class="row p-2">
            <div class="col-5 "></div>
            <div class="col-2 ">
                <button type="submit" class="btn btn-primary ">ОТПРАВИТЬ</button>
            </div>
            <div class="col-5 "></div>
        </div> 
    </form> 


</div>

<?php require_once 'pages/footerJS.php'; ?>

<script>
    $("#call_id").html('<a href="index.php">Вернутся на главную</a>');
</script>

</body>
</html>





