<?php
require_once 'php/connection.php' ; 
$link = mysqli_connect($dbhost , $dbusername, $dbpass, $dbname);

mysqli_query($link ,'SET NAMES utf8');
if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
} 


Class IMG{
protected $link=0; 
public function getLink(){
    return $this->link;
}
public function setLink($link){
     $this->link=$link;
}
public function  SqlCol(){
    $link=$this->link ;
    if($link===0){
        echo 'Установить переменную $IMG->setLink($link)';
        return ;
    }
    $query = "SHOW COLUMNS FROM `ObjValue`" ; 
    $result = mysqli_query($link,$query);
    $COLUMNS=array() ; 
    while($row = mysqli_fetch_assoc($result)){
        $COLUMNS[]=$row['Field'] ; 
    }
    return $COLUMNS ; 
}

/////////////////////////*****/IMAGE*****////////////////////////////////////////////////////
public function IMAGE (){
    $SqlCol=$this->SqlCol() ; 
    $postArr=[] ;
    foreach($SqlCol as $key=>$value){
       $postArr[$value]=((isset($_POST[$value])) ? implode(",", $_POST[$value] ) : 0);   
    }
    $Res="" ; 
    $caunt=0 ;
    foreach($postArr as $key=>$value){
        if($caunt==0){$AND='';}else{$AND='AND';}
        if(!empty($postArr[$key])){
            $Res.="$AND ($key in ($value))" ;
            $caunt++ ; 
        }
    }
    $query = "SELECT * FROM `ObjValue` WHERE $Res" ; 
    $result = mysqli_query($this->link,$query);
    $aRR=[] ;
 while($row = mysqli_fetch_assoc($result)){
        $aRR["uid"][]=$row["uid"] ; 
        $aRR["IMG"][]=$row["IMG"] ; 
        $aRR["SBJNUM"][]=$row["SBJNUM"] ; 
    }
echo json_encode($aRR); 
}
/////////////////////////////////////////////
public function ImageSearch(){
    $SCAT =  ((isset($_POST['SCAT'])) ? $_POST['SCAT'] : 0);
    $WORD =  ((isset($_POST['WORD'])) ?  $_POST['WORD'] : 0);
    $query = "SELECT * FROM `ObjValue` WHERE $SCAT = '$WORD'  " ; 
    $result = mysqli_query($this->link,$query);
    $aRR=[] ;
     
    try {
        while($row = mysqli_fetch_assoc($result)){
            $aRR["uid"][]=$row["uid"] ; 
            $aRR["IMG"][]=$row["IMG"] ; 
            $aRR["SBJNUM"][]=$row["SBJNUM"];
        }
        echo json_encode($aRR);  
    } catch (Exception $e) {
        echo 0 ; 
    }
}
///////////////////////////////////////////////////////
public function Search(){
    $SCAT =  ((isset($_POST['SCAT']))  ? $_POST['SCAT']  : 0);
    $WORD =  ((isset($_POST['WORD'])) ?  $_POST['WORD'] : 0);
    $query = "SELECT * FROM `ObjValue` WHERE $SCAT LIKE '%$WORD%' LIMIT 10" ; 
    $result = mysqli_query($this->link,$query);

    $row_set= array();   
    $xx=0 ; 
    while($row = mysqli_fetch_assoc($result))
    {
     $row_set[] = $row[$SCAT];

    }

echo json_encode($row_set); 
}
///////////////////////////////////////////////////////
public function IMAGETest(){
    $SqlCol=$this->SqlCol() ; 
    $postArr=[] ;
    foreach($SqlCol as $key=>$value){
       $postArr[$value]=((isset($_POST[$value])) ? implode(",", $_POST[$value] ) : 0);   
    }
    $Res="" ; 
    $caunt=0 ;
    foreach($postArr as $key=>$value){
        if($caunt==0){$AND='';}else{$AND='AND';}
        if(!empty($postArr[$key])){
            $Res.="$AND ($key in ($value))" ;
            $caunt++ ; 
        }
    }

    $query = "SELECT * FROM `ObjValue` WHERE $Res" ; 
    $result = mysqli_query($this->link,$query);
    $aRR=[] ;
 while($row = mysqli_fetch_assoc($result)){
        $aRR["uid"][]=$row["uid"] ; 
        $aRR["IMG"][]=$row["IMG"] ; 
        $aRR["SBJNUM"][]=$row["SBJNUM"] ; 
    }
    $aRR["SBJNUM"]=array_unique($aRR["SBJNUM"]) ; 
    echo json_encode($aRR); 
}
}

$IMG=new IMG ;
$IMG->setLink($link); 