<?php

require_once 'connect/connect.php';
$link = mysqli_connect($dbhost, $dbusername, $dbpass, $dbname);
mysqli_query($link, 'SET NAMES utf8');
if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

class Svadba
{

    protected $link = 0;

    public function getLink()
    {
        return $this->link;
    }

    public function setLink($link)
    {
        $this->link = $link;
    }


    public function InsertLinc()
    {
        $link = $this->link;
        if ($link === 0) {
            echo 'Установить переменную $IMG->setLink($link)';
            return;
        }
        $name = ((isset($_POST['NAME'])) ? $_POST['NAME'] : 0);
        $status = ((isset($_POST['STATUS'])) ? $_POST['STATUS'] : 0);
        $bude = ((isset($_POST['BUDE'])) ? $_POST['BUDE'] : 0);
        $summa = ((isset($_POST['SUMMA'])) ?  $_POST['SUMMA'] : 0);
        $query = "INSERT INTO `gosty`( `name`, `status`, `bude`, `summa`) VALUES (\"$name\",\"$status\",\"$bude\",\"$summa\")";
        if (mysqli_query($link, $query)) {
            echo "<br>GOOOOOOOOOOOO<br>";
        } else {
            echo "<br>NOOOOOOOOOOOOOOOO<br>";
        };
    }
    public function GetTable($x)
    {
        $query = "SELECT * FROM `gosty` ORDER BY id DESC";
        $link = $this->link;
        $result = mysqli_query($link, $query);
        $aRR = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $aRR["id"][] = $row["id"];
            $aRR["name"][] = $row["name"];
            $aRR["status"][] = $row["status"];
            $aRR["bude"][] = $row["bude"];
            $aRR["summa"][] = $row["summa"];
        }
        if ($x == "id") {
            return  $aRR["id"];
        }
        if ($x == "name") {
            return  $aRR["name"];
        }
        if ($x == "status") {
            return  $aRR["status"];
        }
        if ($x == "bude") {
            return  $aRR["bude"];
        }
        if ($x == "summa") {
            return  $aRR["summa"];
        }
        if ($x == "all") {
            return  $aRR;
        }
    }
    public function DeleteName($id)
    {
        $query = "DELETE FROM `gosty` WHERE id=$id";
        if (mysqli_query($this->link, $query)) {
            echo "<br>GOOOOOOOOOOOO<br>";
        } else {
            echo "<br>NOOOOOOOOOOOOOOOO<br>";
        };
    }
    /////////////////////////*****/IMAGE/*****////////////////////////////////////////////////////
    public function TOTAL($total)
    {
        if ($total == "all") {
            $query = "SELECT summa FROM `gosty` WHERE 1=1";
            $result = mysqli_query($this->link, $query);
            $aRR = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $aRR += $row["summa"] * 1;
            }
            return    $aRR;
        }
        if ($total == "zapro") {
            $query = "SELECT summa FROM `gosty` WHERE status=\"Запрошено\"";
            $result = mysqli_query($this->link, $query);
            $aRR = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $aRR += $row["summa"] * 1;
            }
            return    $aRR;
        }
        if ($total == "Nezapro") {
            $query = "SELECT summa FROM `gosty` WHERE status=\"Незапрошено\"";
            $result = mysqli_query($this->link, $query);
            $aRR = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $aRR += $row["summa"] * 1;
            }
            return    $aRR;
        }
        if ($total == "bude") {
            $query = "SELECT summa FROM `gosty` WHERE bude=\"Буде\"";
            $result = mysqli_query($this->link, $query);
            $aRR = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $aRR += $row["summa"] * 1;
            }
            return    $aRR;
        }
        if ($total == "Nebude") {
            $query = "SELECT summa FROM `gosty` WHERE bude=\"Небуде\"";
            $result = mysqli_query($this->link, $query);
            $aRR = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $aRR += $row["summa"] * 1;
            }
            return    $aRR;
        }
    }
    public function SearchName($id, $val)
    {
        if ($val == "all") {
            $query = "SELECT * FROM `gosty` WHERE id=$id";
            $result = mysqli_query($this->link, $query);
            $aRR = [];
            while ($row = mysqli_fetch_assoc($result)) {
                $aRR[] = $row;
            }
            return json_encode($aRR);
        } else {
            $query = "SELECT $val FROM `gosty` WHERE id=$id";
            $result = mysqli_query($this->link, $query);
            $aRR = "";
            while ($row = mysqli_fetch_assoc($result)) {
                $aRR .= $row[$val];
            }
            return $aRR;
        }
    }

    public function updateGost($id, $name, $status, $bude, $summa)
    {
        $query = "UPDATE `gosty` SET `name`=\"$name\",`status`=\"$status\",`bude`=\"$bude\",`summa`=$summa WHERE id=$id";
       echo "<br>$query <br>";
        if (mysqli_query($this->link, $query)) {
            echo "good";
        } else {
            echo " not good";
        };
    }
}
$Svadba = new Svadba;
$Svadba->setLink($link);
