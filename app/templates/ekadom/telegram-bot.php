<?php

/* https://api.telegram.org/bot5830357797:AAE1SfSfudrNME3HAcbrWcx_400ZgMw1Ijc/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];
$token = "5830357797:AAE1SfSfudrNME3HAcbrWcx_400ZgMw1Ijc";
$chat_id = "-664971967";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Объект:' => $msg
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}
;

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

$sendToTelegram2 = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram && $sendToTelegram2) {
    header('Location: thanks.html');
} else {
    echo "Error";
}
?>