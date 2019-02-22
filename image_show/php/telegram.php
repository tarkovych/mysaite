<?php 

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
//https://api.telegram.org/bot668464308:AAHZp4NCzUhVPgYL1DlFITbaELhMZ3E5qww/getUpdates

$name = $_POST['call_name'];
$email = $_POST['call_email'];
$msg = $_POST['call_msg'];

$token = "668464308:AAHZp4NCzUhVPgYL1DlFITbaELhMZ3E5qww" ; 
$chat_id = "222761607";
$arr = array(
  'Имя пользователя: ' => $name,
  'Mail: ' => $email,
  'Проблема' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../index.php');
} else {
  echo "Error";
}



?>
