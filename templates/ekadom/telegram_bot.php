<?php
function parser($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    if($result == false){
      echo "Ошибка отправки запроса: " . curl_error($curl);
      return false;
    }
    else{
      return true;
    }
}

function orderSendTelegram($message) {

    $token = "5830357797:AAE1SfSfudrNME3HAcbrWcx_400ZgMw1Ijc";
    $chat_id = "-664971967";

    parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}");
    /*для работы скрипта на сайте должен быть установлен SSL сертификат и сайт должен иметь протокол https. Это правило API Telegram*/
}
?>