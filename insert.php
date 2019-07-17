<?php

require_once 'class.php';

$Svadba->InsertLinc();
header ('Location: index.php');  // перенаправление на нужную страницу
exit();    // прерываем работу скрипта, чтобы забыл о прошлом
