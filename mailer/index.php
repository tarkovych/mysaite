
<?php 
$PagesValue = 0  ; 


require_once "comp/navbar.php" ; 


?>




        <label for="proj_name"> Имя проекта</label>
        <input type="text" name="proj_name" id="proj_name" /><br>
        <label for="proj_link"> Линк проекта</label>
        <input type="text" name="proj_link" id="proj_link" /><br>
        <label for="file">CSV файл </label>
        <input type="file" name="file" id="file" accept=".csv" />
        <input type="button" value="send" onclick="insertData()" />
    
    <?php
    require_once "vMailer.php";
    //require_once "aMailer.php" ;

    ?>




    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="js/getters.js"></script>


</body>

</html>