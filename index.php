v6
<?php
 require_once 'php/connection.php' ; 
// $dbconnect = mysql_connect ($dbhost, $dbusername, $dbpass);
// if (!$dbconnect) { echo ("Не могу подключиться к серверу базы данных!"); }
// if(@mysql_select_db($dbname)) { echo "Подключение к базе $dbname установлено!"; }
// else die ("Не могу подключиться к базе данных $dbname!"); 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);

if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}


    //Если переменная Name передана
    if (isset($_POST["name"])) {
      //Если это запрос на обновление, то обновляем
      if (isset($_GET['red_id'])) {
          $sql = mysqli_query($link, "UPDATE `first` SET `name` = '{$_POST['name']}',`lastname` = '{$_POST['lastname']}',`email` = '{$_POST['email']}' WHERE `uid`={$_GET['red_id']}");
      } else {
          //Иначе вставляем данные, подставляя их в запрос
          $sql = mysqli_query($link, "INSERT INTO `first` (`name`, `lastname`,`email`) VALUES ('{$_POST['name']}', '{$_POST['lastname']}','{$_POST['email']}')");
      }

      //Если вставка прошла успешно
      if ($sql) {
        echo '<p>Успешно!</p>';
      } else {
        echo '<p>Произошла ошибка: ' . mysqli_error($link) . '</p>';
      }
    }

if (isset($_GET['red_id'])) {
      $sql = mysqli_query($link, "SELECT `uid`, `name`, `lastname`,`email` FROM `first` WHERE `uid`={$_GET['red_id']}");
      $userInfo = mysqli_fetch_array($sql);
    }










  if (isset($_GET['del_id'])) { //проверяем, есть ли переменная
    //удаляем строку из таблицы
    $sql = mysqli_query($link, "DELETE FROM `first` WHERE `uid` = {$_GET['del_id']}");
    if ($sql) {
      echo "<p>Товар удален.</p>";
    } else {
      echo '<p>Произошла ошибка: ' . mysqli_error($link) . '</p>';
    }
  }




?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css" integrity="sha384-PDle/QlgIONtM1aqA2Qemk5gPOE7wFq8+Em+G/hmo5Iq0CCmYZLv3fVRDJ4MMwEA" crossorigin="anonymous">
    <link rel="stylesheet" href="css/mystyle.css">
    <title>Hello, world!</title>
  </head>
  <body>

<?php 
require_once 'pages/header.php'
?>





<table border='1' width="50%" >
	<tr>
    	<td>ID</td>
    	<td>FirstName</td>
    	<td>LastName</td>
    	<td>Email</td>
    	<td>Delete</td>
    	<td>Update</td>
	</tr>
<?php 

$sql=mysqli_query($link , 'SELECT `uid` , `name`,`lastname`,`email` FROM `first`');

while ($result=mysqli_fetch_array($sql)){
	echo "<tr><td>{$result['uid']}</td><td>{$result['name']}</td><td>{$result['lastname']}</td><td>{$result['email']}</td><td><a href='?del_id={$result['uid']}'> delete</a></td><td><a href='?red_id={$result['uid']}'>update</a></td></tr>" ; 
}

?>

</table>

<a href='?add=new' data-toggle='modal' data-target='#exampleModal' data-whatever='@getbootstrap' >Добавить новый товар</a>
<div id="timer">0</div>

<button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<form action="" method="post">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        	
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

    <table>
      <tr>
        <td>NAME:</td>
        <td><input type="text" name="name" value="<?= isset($_GET['red_id']) ? $userInfo['name'] : ''; ?>"></td>
      </tr>
      <tr>
        <td>LASTNAME:</td>
        <td><input type="text" name="lastname"  value="<?= isset($_GET['red_id']) ? $userInfo['lastname'] : ''; ?>"> </td>
      </tr>
      <tr>
        <td>EMAIL:</td>
        <td><input type="text" name="email"  value="<?= isset($_GET['red_id']) ? $userInfo['email'] : ''; ?>"> </td>
      </tr>
     <!--  <tr>
        <td colspan="2"><input type="submit" value="OK" class="btn btn-outline-primary fornIn"></td>
      </tr> -->
    </table>
  
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <input type="submit" class="btn btn-primary" value="Send message">
      </div>
    </div>
  </div>
</form>
</div>

<script src='js/myjs.js'></script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/js/bootstrap.min.js" integrity="sha384-7aThvCh9TypR7fIc2HV4O/nFMVCBwyIUKL8XCtKE+8xgCgl/PQGuFsvShjr74PBp" crossorigin="anonymous"></script>
  </body>
</html>