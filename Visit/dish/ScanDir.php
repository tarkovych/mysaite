<?php
define("DS", DIRECTORY_SEPARATOR);
define("SERV", "http://b.ipsos.com.ua/myDB");
$uid =      isset($_GET['uid']) ? $_GET['uid'] : 0;
$iter =     isset($_GET['iter']) ? $_GET['iter'] : 0;
$B6iter =    isset($_GET['B6iter']) ? $_GET['B6iter'] : 0;
$data =     isset($_GET['data']) ? $_GET['data'] : 0;
$path = $uid . DS . $data . DS . $iter . DS . $B6iter . DS;
$upload_files = scandir($path);
$picture = '';
foreach ($upload_files as $filename) {
  if ($filename !== "." && $filename !== ".." && GETimagesize($path . DS . $filename) > 0) {
    $picture .= '<center><div class="text-center" style = "width:600px">';
    $picture .= '<img src="' . SERV . DS . $path . $filename . '" style="max-width:100% ; text-align:center" />';
    $picture .= '<center>' . $filename . '</center>';
    $picture .= '</div></center>';
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
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">

      <!-- <div class="navbar-nav">
        <a class="nav-item nav-link active hoverNav" href="<?php echo ROOT . 'index.php' ?>">Респонденты<span class="sr-only">(current)</span></a>
      </div>-->
      <div class="navbar-nav">
        <a class="nav-item nav-link active hoverNav" href="https://web.brt.org.ua/Visit/visit/index.php">Дневник<span class="sr-only">(current)</span></a>
      </div>
    </div>
  </nav>
  <div class="mt-3"></div>

  <style>
    .hoverNav:hover {
      background-color: grey;
    }
  </style>


  <div class="container">
    <?php echo $picture;  ?>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>