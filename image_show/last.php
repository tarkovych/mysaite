<?php
 require_once 'php/connection.php' ; 
// $dbconnect = mysql_connect ($dbhost, $dbusername, $dbpass);
// if (!$dbconnect) { echo ("Не могу подключиться к серверу базы данных!"); }
// if(@mysql_select_db($dbname)) { echo "Подключение к базе $dbname установлено!"; }
// else die ("Не могу подключиться к базе данных $dbname!"); 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);
ini_set('memory_limit', '1024M');
mysqli_query($link ,'SET NAMES utf8');
if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
                    exit;
} 
$C1  =  ((isset($_POST['C1']))  ? implode(",", $_POST['C1'] ) : 0);
$C1a =  ((isset($_POST['C1a'])) ? implode(",", $_POST['C1a']) : 0);
$C2  =  ((isset($_POST['C2']))  ? implode(",", $_POST['C2'] ) : 0);
$C4  =  ((isset($_POST['C4']))  ? implode(",", $_POST['C4'] ) : 0);
$S7x1=  ((isset($_POST['S7x1']))? implode(",", $_POST['S7x1']): 0);
$S7x2=  ((isset($_POST['S7x2']))? implode(",", $_POST['S7x2']): 0);
$S7x3=  ((isset($_POST['S7x3']))? implode(",", $_POST['S7x3']): 0);
$S7x4=  ((isset($_POST['S7x4']))? implode(",", $_POST['S7x4']): 0);
$S7x5=  ((isset($_POST['S7x5']))? implode(",", $_POST['S7x5']): 0);
$S7x6=  ((isset($_POST['S7x6']))? implode(",", $_POST['S7x6']): 0);
$S7x7=  ((isset($_POST['S7x7']))? implode(",", $_POST['S7x7']): 0);
$D2  =  ((isset($_POST['D2']))  ? implode(",", $_POST['D2'] ) : 0);
$D3  =  ((isset($_POST['D3']))  ? implode(",", $_POST['D3'] ) : 0);  
$S2  =  ((isset($_POST['S2']))  ? implode(",", $_POST['S2'] ) : 0);
$D1  =  ((isset($_POST['D1']))  ? implode(",", $_POST['D1'] ) : 0);
$GDR =  ((isset($_POST['GDR'])) ? implode(",", $_POST['GDR']) : 0);    
$AGE =  ((isset($_POST['AGE'])) ? implode(",", $_POST['AGE']) : 0);
$BMI =  ((isset($_POST['BMI'])) ? implode(",", $_POST['BMI']) : 0);
$IDR =  ((isset($_POST['IDR'])) ? implode(",", $_POST['IDR']) : 0);

$Obj=    array($C1, $C1a, $C2, $C4,$S7x1,$S7x2,$S7x3,$S7x4,$S7x5,$S7x6,$S7x7, $D2, $D3, $S2, $D1 ,$GDR, $AGE, $BMI,$IDR) ;
$ObjKey= array("C1","C1a","C2","C4","S7x1","S7x2","S7x3","S7x4","S7x5","S7x6","S7x7","D2","D3","S2","D1","GDR","AGE","BMI","IDR") ;
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


$aRR=[] ;
$UnArr=[] ; 
$row ; 
 while($row = mysqli_fetch_assoc($result)){
    foreach($row as $key=>$value){
        $aRR[$key][]=$row[$key] ; 
    }
}

foreach($ObjKey as $key){

$UnArr[$key]=array_unique($aRR[$key]) ; 
}
echo json_encode($UnArr);  
