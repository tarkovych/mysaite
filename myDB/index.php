<?php 

///////////////////////////
require_once "connection.php" ;
////////////////////////////


function uidShow($link){

      if (empty($link)) {
          echo 'Установить $link';
          return;
      }
      $query = "SELECT * FROM `visit1` WHERE 1";
      $result = mysqli_query($link, $query);
      $COLUMNS = <<<EON
      <table class="table table-sm table-striped table-bordered table-hover">
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


///////
require_once "comp/nav.php" ; 
/////////
?>

<div class="container">
<?php
  echo uidShow($link) ; 
   ?>
</div>






<?php 
/////////
require_once "comp/footer.php" ; 
////////
?>