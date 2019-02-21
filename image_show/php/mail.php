<?php 
require_once('phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['call_name'];
$email = $_POST['call_email'];
$msg = $_POST['call_msg'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'puluppp@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'vanyabiluy1122'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                         
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('puluppp@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('puluppp@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment($_FILES['upload']['tmp_name'],$_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = ''.$name .' оставил(a) заявку, <br> mail '.$email.'<br>Проблема: '.$msg;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'QOOD' ; 
    header('location: ../index.php');
}
?>