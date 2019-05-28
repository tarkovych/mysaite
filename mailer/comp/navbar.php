<?php

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $Navpages["title"][$PagesValue]; ?></title>
    <link rel="stylesheet" href="css/navbar.css">
</head>

<body>

    <header>
        <nav>
            <?php foreach ($Navpages["action"] as $key => $value) : ?>

                <div>
                    <a href="<?php echo $Navpages["action"][$key]; ?>"><span><?php echo $Navpages["cat"][$key]; ?></span></a>
                </div>
            <?php endforeach;  ?>
        </nav>
    </header>
    <style>
        nav a {
            text-decoration: none
        }
    </style>