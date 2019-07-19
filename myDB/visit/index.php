<?php 
///////////////
require_once '../connection.php';

////////////////
function uidShow($link){
      $query = "SELECT * FROM `visit2` WHERE 1 ORDER BY uid  , iter; ";
      $result = mysqli_query($link, $query);
      $COLUMNS = <<<EON
      <table class="table table-sm table-striped table-bordered table-hover">
  <thead class="table-dark">
    <tr>
      <th scope="col">№</th>
      <th scope="col">uid</th>
      <th scope="col">iter</th>
      <th scope="col">complite</th>
      <th scope="col">Заполнение</th>
      <th scope="col">День недели </th>
      <th scope="col">Ситуация</th>
    </tr>
  </thead>
  <tbody>
EON;
$TableList = [
  "day"=>["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"] , 
  "training"=>["Потренироваться","Реальная ситуация"],
  "prepare"=>["Прием пищи","Приготовление еды"]
]  ; 

      while ($row = mysqli_fetch_assoc($result)) {
        $id=$row['id'] ;
        $uid=$row['uid'] ; 
        $iter=$row['iter'] ; 
        $complite=$row['complite'] ; 
        $trainind=$TableList["training"][$row['training']-1] ; 
        $day=$TableList["day"][$row['day']-1] ; 
        $prepare=$TableList["prepare"][$row['prepare']-1] ; 
        $color = $complite?"table-success":"" ; 
          $COLUMNS.= <<<EON
          
              <tr>
                <th scope="row">$id</th>
                <td>$uid</td>
                <td>$iter</td>
                <td class="$color">$complite</td>
                <td>$trainind</td>
                <td>$day</td>
                <td>$prepare</td>
              </tr>
          
EON;
      }
      return $COLUMNS."</tbody></table>";
  
}


/////////////////
require_once "../comp/nav.php" ; 
////////////////////////
?>

<div class="container">
<?php
  echo uidShow($link) ; 
   ?>
</div>

<?php 
//////////////////
require_once "../comp/footer.php" ; 
////////////////////
?>





