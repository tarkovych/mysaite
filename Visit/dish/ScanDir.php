<?php
define("DS", DIRECTORY_SEPARATOR);
define("SERV", "http://b.ipsos.com.ua/DPicture");
$uid =      isset($_GET['uid']) ? $_GET['uid'] : 0;
$iter =     isset($_GET['iter']) ? $_GET['iter'] : 0;
$B6iter =    isset($_GET['B6iter']) ? $_GET['B6iter'] : 0;
$B6 =    isset($_GET['B6']) ? $_GET['B6'] : 0;
$data =     isset($_GET['data']) ? $_GET['data'] : 0;
$path = $uid . DS . $data . DS . $iter . DS . $B6iter . DS;
$upload_files = scandir($path);
$picture = '';
foreach ($upload_files as $filename) {
  if ($filename !== "." && $filename !== ".." && GETimagesize($path . DS . $filename) > 0) {
    $picture .= '<center><div class="view overlay zoom p-5" style = "width:800px">';
    $picture.='<a href="' . SERV . DS . $path . $filename . '" rel="lightbox" align="Center">';
    $picture .= '<img src="' . SERV . DS . $path . $filename . '" style="max-width:100% ; text-align:center" class="z-depth-2 z-depth-1" />';
    $picture .= '</a></div><center>' . $filename . '</center>';
    $picture .= '</center>';
  }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?php echo $B6 ;?></title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/mdb.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="lbox/css/lightbox.css">

     <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->

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
        <a class="nav-item nav-link active hoverNav" href="https://b.ipsos.com.ua/Visit//visit/index.php">Дневник<span class="sr-only">(current)</span></a>
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

  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/popper.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/mdb.min.js"></script>
  <script type="text/javascript" src="lbox/js/lightbox.js"></script>
</body>

</html>