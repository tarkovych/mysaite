<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1> QQQQQ</h1>
<a href="/image_show/">image_show</a> <br>
    <a href="/mailer/">mailer</a> <br>
</body>
</html>
<?php 

echo "HELLOO" ; 

class Test {
    public $x = 0  ; 
    public function root () {
        echo  __METHOD__ . " from " .get_class() . "<br>";
    }
}

class Test2 extends Test {


    public function root2 () {
        echo __METHOD__ . " from " .get_class() . "<br>";
    }
}

$test = new Test2 ; 
$test->root2() ; 
$test->root(); 