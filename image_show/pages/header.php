<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title><?php echo $page_Name; ?></title>

  <!-- <link rel="stylesheet" type="text/css" href="css/lightbox.css"> -->
  <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">  -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/mystyle.css">
  <link rel="stylesheet" href="css/mystyle2.css">
  <link rel="stylesheet" href="css/ipsos.css">

</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="row  w-100">
      <div class="col-2">
        <a class="navbar-brand" href="index.php">
          <span class="ru">ГЛАВНАЯ</span><span class="ua">ГОЛОВНА</span><span class="en">HOME</span>
        </a>
      </div>
      <div class="col-2 ">
        <div class="flag-ua" id="FLAG_ID" style="cursor:pointer ; display:inline"></div>
      </div>
      <!-- //////////////////GOOGLE -->
      <div class="col-8">
        <form class="form-inline " id="FORMOFF">
          <div class="row w-100">
            <div class="col-8">
              <input id="GOOGLEVALUE" oninput="ZAPROZAJAX(this.value)" class="form-control mr-sm-2  dropdown-toggle w-100" type="search" placeholder="Search" aria-label="Search" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="dropdown-menu" id="DROPGOOLE"></div>
            </div>
            <div class="col-4">
              <input type="button" class="btn btn-outline-dark my-2 my-sm-0 " style="border:solid black 2px ; font-weight:bold" value="Search" autocomplete="off" onclick="ZAPROZAJAX('GOOGLEVALUE','search')" id="ShowImgBtnClick">
            </div>
          </div>


        </form>
      </div>
      <!-- //////////////////GOOGLE -->
    </div>

  </nav>

  <style>
    #FLAG_ID {
      background-size: 34px;
      background-position: 15px center;
      background-repeat: no-repeat;
      padding: 15px 0 15px 64px;
    }

    .ru {}

    .en {}

    .ua {}
  </style>

  <script>
    let massFlag = ["ua", "ru", "en"];
    let div_flag = document.getElementById("FLAG_ID");
    div_flag.onclick = function() {
      flagfun();
      lopster();
    }

    function flagfun(loc = 0) {
      let Arrflag = div_flag.className.split('-');
      let v = loc == "ru" ? 0 : loc == "en" ? 1 : loc == "ua" ? 3 : 0;
      let flag = loc !== 0 ? massFlag[v] : Arrflag[1];
      if (flag == massFlag[0]) {
        div_flag.className = "flag-" + massFlag[1];
        localStorage['lag'] = massFlag[1];
      }
      if (flag == massFlag[1]) {
        div_flag.className = "flag-" + massFlag[2];
        localStorage['lag'] = massFlag[2];
      }
      if (flag == massFlag[2]) {
        div_flag.className = "flag-" + massFlag[0];
        localStorage['lag'] = massFlag[0];
      }

    }

    function lopster() {
      for (let i = 0; i < massFlag.length; i++) {
        if (div_flag.className == "flag-" + massFlag[i]) {
          for (let j = 0; j < document.getElementsByClassName(massFlag[i]).length; j++) {
            try {
              document.getElementsByClassName(massFlag[i])[j].style.display = "inline";
            } catch {
              console.log(document.getElementsByClassName(massFlag[i])[j]);
            }
          }
        } else {
          for (let j = 0; j < document.getElementsByClassName(massFlag[i]).length; j++) {
            try {
              document.getElementsByClassName(massFlag[i])[j].style.display = "none";
            } catch {
              console.log(document.getElementsByClassName(massFlag[i])[j]);
            }
          }
        }
      }
    }

    if (localStorage['lag'] == undefined) {
      flagfun('ru');
      localStorage['lag'] = 'ru';

    } else {
      flagfun(localStorage['lag']);
    }
  </script>