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
      <th scope="col">День недели </th>
      <th scope="col">Заполнение</th>
      <th scope="col">Ситуация</th>
      <th scope="col">B1</th>
      <th scope="col">B2</th>
      <th scope="col">B6</th>
    </tr>
  </thead>
  <tbody>
EON;
$TableList = [
  "day"=>["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"] , 
  "training"=>["Потренироваться","Реальная ситуация"],
  "prepare"=>["Прием пищи","Приготовление еды"],
  "B1lab"=>["1.Перед завтраком / сразу после того, как проснулся (лась)","2.Завтрак","3.Второй завтрак","4.Перекус в первой половине дня / между завтраком и обедом","5.Обед","6.Между обедом и ужином / Полдник","7.Перекус перед ужином","8.Ужин","9.Перекус после ужина","10.Перед тем, как лечь спать / На ночь","11.Ночной перекус / после того как лег спать / встал (а) ночью, чтобы перекусить"] 
]  ; 

      while ($row = mysqli_fetch_assoc($result)) {
        $id=$row['id'] ;
        $uid=$row['uid'] ; 
        $iter=$row['iter'] ; 
        $complite=$row['complite'] ; 
        $trainind=$TableList["training"][$row['training']-1] ; 
        $day=$TableList["day"][$row['day']-1] ; 
        $prepare=$TableList["prepare"][$row['prepare']-1] ; 
        $B2=$row['B2'] ; 
        $B6=$row['B6'] ; 
        $B1lab=$TableList["B1lab"][$row['B1']-1] ; 
        $color = $complite?"table-success":"" ; 
        $color2 = $row['prepare']==1?"table-success":"table-warning" ;
        $color3 = $row['training']==2?"table-success":"table-warning" ; 
        $color4 = $row['B1']==2||$row['B1']==5||$row['B1']==8?"table-success":"table-warning" ;
        $color5 = $row['B2']>5?"table-warning":"table-success" ; 
         
          $COLUMNS.= <<<EON
          
              <tr>
                <th scope="row">$id</th>
                <td>$uid</td>
                <td>$iter</td>
                <td class="$color">$complite</td>
                <td>$day</td>
                <td class="$color3">$trainind</td>
                <td class="$color2">$prepare</td>
                <td class="$color4">$B1lab</td>
                <td class="$color5">$B2</td>
                <td >$B6</td>
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





