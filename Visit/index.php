<?php

///////////////////////////
require_once "connection.php";
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

function uidShow($link)
{

  if (empty($link)) {
    echo 'Установить $link';
    return;
  }
  $query = "SELECT * FROM `visit1` WHERE 1 ORDER BY uid";
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
      <th scope="col">Состояние визита</th>
    </tr>
  </thead>
  <tbody>
EON;
$caunt=0 ; 
  while ($row = mysqli_fetch_assoc($result)) {

    $id = ++$caunt ; //$row['id'];
    $uid = $row['uid'];
    $name = $row['name'];
    $telephone = $row['telephone'];
    $data = $row['data'];
    $state = (int) $row['state'];
    $stateText ="";
    if ($state == 0) {
      $stateText = "в поле";
      $stateColor = "table-info";
    } elseif ($state == 1) {
      $stateText = "завершен";
      $stateColor = "table-success";
    } else {
      $stateText = "дисквалифайд";
      $stateColor = "table-danger";
    };

    $COLUMNS .= <<<EON
          
              <tr>
                <th >$id</th>
                <td>$uid</td>
                <td>$name</td>
                <td>$telephone</td>
                <td>$data</td>
                <td class="$stateColor">$stateText</td>
              </tr>
          
EON;
  }
  return $COLUMNS . "</tbody></table>";
}


///////
require_once "comp/nav.php";
/////////
?>

<div class="container">
  <?php
  echo uidShow($link);
  ?>
</div>
<script type="text/javascript" src="js/addons/datatables.min.js"></script>
<script>
  $(document).ready(function() {
    $('#dtOrderExample').DataTable({
      "order": [
        [3, "desc"]
      ]
    });
    $('.dataTables_length').addClass('bs-select');
  });

  setTimeout('true5()', 500);



  function true5() {
    document.getElementsByTagName("select")[0].onchange = function() {
      localStorage["SelectValue"] = document.getElementsByTagName("select")[0].value;
    }
    if (localStorage["SelectValue"]) {
      document.getElementsByTagName("select")[0].value = localStorage["SelectValue"];
      document.getElementsByTagName("select")[0].change;

      var event = new Event('change');
      document.getElementsByTagName("select")[0].dispatchEvent(event);

    }

  }
</script>




<?php
/////////
require_once "comp/footer.php";
////////
?>