<?php
$PagesValue = 1;
require_once "comp/navbar.php";


?>

<?php
//require_once "vMailer.php";
//require_once "aMailer.php" ;

?>
<style>
    .mytable {
        height: calc(100vh - 120px);
        overflow-y: scroll;
    }

    #faketable tbody {
        visibility: hidden;
    }
</style>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="js/getters.js"></script>
<div class="row">
    <div class="col-3">
        <div class="input-group ">
            <div class="input-group-prepend">
                <label class="input-group-text" for="projects">Проекты:</label>
            </div>
            <select onchange="getMails()" class="custom-select" id="projects">
                <script>
                    getTables();
                </script>
            </select>
        </div>
    </div>
    <div class="col-8">
        <div class="row">
            <table class="table table-sm table-hover" id="faketable">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">uid</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Succ</th>
                        <th scope="col">NonSucc</th>
                        <th scope="col">OverQta</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="row mytable">
            <table class=" table table-sm table-hover" id="tablemails">
                <tbody>
                </tbody>
            </table>
        </div>


    </div>
</div>



</body>

</html>