<?php 
require_once 'connection.php';

function uidShow($link){

      if (empty($link)) {
          echo 'Установить $link';
          return;
      }
      $query = "SELECT * FROM `visit1` WHERE 1";
      $result = mysqli_query($link, $query);
      $COLUMNS = <<<EON
      <table class="table table-sm">
  <thead class="table-dark">
    <tr>
      <th scope="col">№</th>
      <th scope="col">uid</th>
      <th scope="col">Имя</th>
      <th scope="col">Телефон</th>
    </tr>
  </thead>
  <tbody>
EON;
      while ($row = mysqli_fetch_assoc($result)) {
        $id=$row['id'] ;
        $uid=$row['uid'] ; 
        $name=$row['name'] ; 
        $telephone=$row['telephone'] ; 
          $COLUMNS.= <<<EON
          
              <tr>
                <th scope="row">$id</th>
                <td>$uid</td>
                <td>$name</td>
                <td>$telephone</td>
              </tr>
          
EON;
      }
      return $COLUMNS."</tbody></table>";
  
}


?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


  </head>
  <body>
<div class="container">
<?php
  echo uidShow($link) ; 
   ?>
</div>









    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>