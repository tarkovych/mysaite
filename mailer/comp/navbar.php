<?php
require_once("php/connection.php");

$Navpages = [
    "action" => ["index.php", "program.php"],
    "cat" => ["ГОЛОВНА", "РОЗСЫЛКА"],
    "title" => ["home", "prog"],
]

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/myStyle.css">

    <title><?php echo $Navpages["title"][$PagesValue]; ?></title>
</head>

<body>
<div class="MyNavbar">
    <header>
        <nav>
            <?php foreach ($Navpages["action"] as $key => $value) : ?>

                <div>
                    <a href="<?php echo $Navpages["action"][$key]; ?>"><span><?php echo $Navpages["cat"][$key]; ?></span></a>
                </div>
            <?php endforeach;  ?>
        </nav>
    </header>
</div>


    <style>
        nav a {
            text-decoration: none
        }
    </style>