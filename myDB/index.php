<?php 

///////////////////////////
require_once "connection.php" ;
////////////////////////////
?>
<link href="css/addons/datatables.min.css" rel="stylesheet">
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

function uidShow($link){

      if (empty($link)) {
          echo 'Установить $link';
          return;
      }
      $query = "SELECT * FROM `visit1` WHERE 1";
      $result = mysqli_query($link, $query);
      $COLUMNS = <<<EON
      <table class="table table-sm table-striped table-bordered table-hover" id="dtOrderExample">
  <thead class="table-dark">
    <tr>
      <th scope="col">№</th>
      <th scope="col">uid</th>
      <th scope="col">Имя</th>
      <th scope="col">Телефон</th>
      <th scope="col">Дата</th>
    </tr>
  </thead>
  <tbody>
EON;
      while ($row = mysqli_fetch_assoc($result)) {
        $id=$row['id'] ;
        $uid=$row['uid'] ; 
        $name=$row['name'] ; 
        $telephone=$row['telephone'] ;
        $data=$row['data'] ; 
          $COLUMNS.= <<<EON
          
              <tr>
                <th scope="row">$id</th>
                <td>$uid</td>
                <td>$name</td>
                <td>$telephone</td>
                <td>$data</td>
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
<script type="text/javascript" src="js/addons/datatables.min.js"></script>
<script>

$(document).ready(function () {
$('#dtOrderExample').DataTable({
"order": [[ 3, "desc" ]]
});
$('.dataTables_length').addClass('bs-select');
});

</script>




<?php 
/////////
require_once "comp/footer.php" ; 
////////
?>