
<?php
define("ROOT2", getcwd());
define("DS2", DIRECTORY_SEPARATOR);

?>


<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<!-- ///////////////////////////////////////////// -->
<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.7/css/mdb.min.css" rel="stylesheet">

<!-- //////////////////////////////////////////////////////// -->


</head>

<body >
 <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script> 
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">

      <div class="navbar-nav">
        <a class="nav-item nav-link active hoverNav" href="<?php echo ROOT . 'index.php'?>">Визит 1 <span class="sr-only">(current)</span></a>
      </div>

      <div class="navbar-nav">
        <a class="nav-item nav-link active hoverNav" href="<?php echo ROOT . 'visit/index.php'?>">Дневник <span class="sr-only">(current)</span></a>
      </div>
    </div>
  </nav>
  <div class="mt-3"></div>

  <style>
  .hoverNav:hover{
    background-color: grey ; 
  }
  </style>

