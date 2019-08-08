<?php 
///////////////
require_once '../connection.php';
?>
<link href="../css/addons/datatables.min.css" rel="stylesheet">
<style>
table.dataTable thead .sorting:after,
table.dataTable thead .sorting:before,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_asc:before,
table.dataTable thead .sorting_asc_disabled:after,
table.dataTable thead .sorting_asc_disabled:before,
table.dataTable thead .sorting_desc:after,
table.dataTable thead .sorting_desc:before,
table.dataTable thead .sorting_desc_disabled:after,
table.dataTable thead .sorting_desc_disabled:before {
  bottom: .5em;
}
</style>
<?php
////////////////
function uidShow($link){
      $query = "SELECT * FROM `visit2` WHERE 1 ORDER BY uid  , iter; ";
      $result = mysqli_query($link, $query);
      $COLUMNS = <<<EON
      <table class="table table-sm table-striped table-bordered table-hover table-responsive-lg" id="dtOrderExample">
        <thead class="table-dark">
          <tr>
            <th scope="col">№</th>
            <th scope="col">uid</th>
            <th scope="col">iter</th>
            <th scope="col">complite</th>
            <th scope="col">Дата </th>
            <th scope="col">День недели </th>
            <th scope="col">Заполнение(OP0)</th>
            <th scope="col">Ситуация(B0)</th>
            <th scope="col">B1</th>
            <th scope="col">B2</th>
            <th scope="col">B6-K1</th>
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
$caunt=0 ;
      while ($row = mysqli_fetch_assoc($result)) {
        $id= ++$caunt ;//$row['id'] ;
        $uid=$row['uid'] ; 
        $data=$row['data'] ;
        $iter=$row['iter'] ; 
        $complite=$row['complite'] ; 
        $trainind=$TableList["training"][$row['training']-1] ; 
        $day=$TableList["day"][$row['day']-1] ; 
        $prepare=$TableList["prepare"][$row['prepare']-1] ; 
        $B2=$row['B2'] ; 
        $B6=$row['B6'];  
        $B6iter=$row['B6iter']; 
        $B6path=$row['B6path'];
        $B1lab=$TableList["B1lab"][$row['B1']-1] ; 
        $color = $complite?"table-success":"" ; 
        $color2 = $row['prepare']==1?"table-success":"table-warning" ;
        $color3 = $row['training']==2?"table-success":"table-warning" ; 
        $color4 = $row['B1']==2||$row['B1']==5||$row['B1']==8?"table-success":"table-warning" ;
        $color5 = $row['B2']>5?"table-warning":"table-success" ; 
         $color6 = "" ; 
//////////////////////////////////////////        ///////////////////
        $uiditer= $uid."_".$iter ;
        $linc = "";
        if(!empty($B6) && !empty($B6iter)){
          $arrB6= explode("<b>/</b>",$B6) ; 
          $arrB6iter=explode("/",$B6iter) ;
         // $arrB6path= split("{#}",$B6path) ;
          for($i=0 ; $i<(count($arrB6)-1) ; $i++){
              $linc.="<u><a href ='http://b.ipsos.com.ua/DPicture/ScanDir.php?B6iter=".$arrB6iter[$i]."&uid=".$uid."&iter=".$iter."&data=".$data."&B6=".$arrB6[$i]."' target='_blank' style='color:#191970'>".$arrB6iter[$i].".".$arrB6[$i]."</a></u></br>";
               $color6="table-info";
            }
        }else{
          $linc= "NoN"; 
          $color6 = "table-danger" ; 
        }
 
/////////////////////////////////////////////////////////////
          $COLUMNS.= <<<EON
              <tr>
                <th >$id</th>
                <td >$uid</td>
                <td >$iter</td>
                <td class="$color">$complite</td>
                <td >$data</td>
                <td >$day</td>
                <td class="$color3">$trainind</td>
                <td class="$color2">$prepare</td>
                <td class="$color4">$B1lab</td>
                <td class="$color5">$B2</td>
                <td class="$color6" id="Image_$uiditer">$linc</td>
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
<script type="text/javascript" src="../js/addons/datatables.min.js"></script>
<script>
$(document).ready(function () {
$('#dtOrderExample').DataTable({
"order": [[ 3, "desc" ]]
});
$('.dataTables_length').addClass('bs-select');
});


setTimeout('true5()' , 500) ; 



function true5() {
  document.getElementsByTagName("select")[0].onchange = function (){
    localStorage["SelectValue"] = document.getElementsByTagName("select")[0].value ; 
  }
  if(localStorage["SelectValue"]){
    document.getElementsByTagName("select")[0].value=localStorage["SelectValue"] ; 
    document.getElementsByTagName("select")[0].change ; 

    var event = new Event('change');
		document.getElementsByTagName("select")[0].dispatchEvent(event);
   
  }
  
}


</script>

<?php 
//////////////////
require_once "../comp/footer.php" ; 
////////////////////
?>





