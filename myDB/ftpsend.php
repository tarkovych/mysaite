
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");

define("DS", DIRECTORY_SEPARATOR);
$TempName= "myDB" ; 

$ftp_server    = 'b.ipsos.com.ua';
$ftp_port    = 22;
$ftp_user_name    = 'ipsos-web';
$ftp_user_pass    = 'fG6Wcv5';
$ftp = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");
ftp_login($ftp, $ftp_user_name, $ftp_user_pass);
ftp_pasv($ftp, true); // Passive mode



$date = date('Y-m-d');

$uid =      $_POST['uid'];
$iterUid =  $_POST['iterUid'];
$dataTemp = $_POST["dataTemp"];
$bl =       $_POST["bl"];


$dir = $TempName.DS.$uid.DS;
ftp_mkdir($ftp, $dir);
$dir = $TempName.DS.$uid.DS.$dataTemp.DS;
ftp_mkdir($ftp, $dir);
$dir = $TempName.DS.$uid.DS.$dataTemp.DS.$iterUid.DS;
ftp_mkdir($ftp, $dir);
$dir = $TempName.DS.$uid.DS.$dataTemp.DS.$iterUid.DS.$bl.DS;
ftp_mkdir($ftp, $dir);

$file_path = '';
//if ($_POST['input'] == 1) {
    $local_file  = $_FILES['file']['tmp_name'][0];
    $file_path = $_FILES['file']['name'][0];
    $ftp_file    = $dir . $file_path;
//}
//  else {
//     $local_file  = $_FILES['file']['tmp_name'];
//     $file_path = $_POST['count'] . $_POST['type'];
//     $ftp_file    = $dir . $file_path;
// }
$contents_on_server = ftp_nlist($ftp, $dir);
if (in_array($ftp_file, $contents_on_server)) {
    $i = 1;
    while (in_array($ftp_file, $contents_on_server)) {
        $ftp_file    = $dir . $i . "_" . $file_path;
        $i++;
    }
    if (!ftp_put($ftp, $ftp_file, $local_file, FTP_BINARY)) {
        // Ошибка загрузки
        print_r(error_get_last());
    }
} else {
    if (!ftp_put($ftp, $ftp_file, $local_file, FTP_BINARY)) {
        // Ошибка загрузки
        print_r(error_get_last());
    }
}

ftp_close($ftp);


?>