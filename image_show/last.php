<?php
 require_once 'php/connection.php' ; 
// $dbconnect = mysql_connect ($dbhost, $dbusername, $dbpass);
// if (!$dbconnect) { echo ("Не могу подключиться к серверу базы данных!"); }
// if(@mysql_select_db($dbname)) { echo "Подключение к базе $dbname установлено!"; }
// else die ("Не могу подключиться к базе данных $dbname!"); 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);

if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
} 


    // Категория и цены

    $C1  =  ((isset($_POST['C1']))  ? implode(",", $_POST['C1'] ) : 0);
    $C1a =  ((isset($_POST['C1a'])) ? implode(",", $_POST['C1a']) : 0);
    $C2  =  ((isset($_POST['C2']))  ? implode(",", $_POST['C2'] ) : 0);
    $C4  =  ((isset($_POST['C4']))  ? implode(",", $_POST['C4'] ) : 0);
    $D2  =  ((isset($_POST['D2']))  ? implode(",", $_POST['D2'] ) : 0);
    $D3  =  ((isset($_POST['D3']))  ? implode(",", $_POST['D3'] ) : 0);  
    $S2  =  ((isset($_POST['S2']))  ? implode(",", $_POST['S2'] ) : 0);
    $D1  =  ((isset($_POST['D1']))  ? implode(",", $_POST['D1'] ) : 0);
    $GDR =  ((isset($_POST['GDR'])) ? implode(",", $_POST['GDR']) : 0);    
    $AGE =  ((isset($_POST['AGE'])) ? implode(",", $_POST['AGE']) : 0);
    $BMI =  ((isset($_POST['BMI'])) ? implode(",", $_POST['BMI']) : 0);

    $Obj=    array($C1, $C1a, $C2, $C4, $D2, $D3, $S2, $D1 ,$GDR, $AGE, $BMI) ;
    $ObjKey= array("C1","C1a","C2","C4","D2","D3","S2","D1","GDR","AGE","BMI") ;
    $Res="" ;
    $caunt=0 ;
    for($i=0 ; $i<count($Obj) ;$i++){
    if($caunt==0){$AND='';}else{$AND='AND';}
     if($Obj[$i]!=0){
        $Res.="$AND ($ObjKey[$i] in ($Obj[$i]))" ;
        $caunt++ ; 
        }
    }
 if($Res==''){$Res="1";}
$query = "SELECT * FROM `ObjValue` WHERE $Res" ; 
 $result = mysqli_query($link,$query);
$arrLength=[] ; 
//while($row = mysqli_fetch_assoc($result)){
  //  array_push($arrLength,$row["uid"]) ; 
//}
  //echo count($arrLength) ; 
  $row_set= array();   
while($row = mysqli_fetch_assoc($result))
{
    $row_set[] = $row;
}

echo json_encode($row_set);
