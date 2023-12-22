<?php

$forms = array(
    'change-screen1' => 'Оставь заявку и получи на счет 799 рублей',
    'change-screen2' => 'Будь в курсе 24/7',
    'change-screen3' => 'Заказать обратный звонок',
    'modal1' => 'Трафик интернет - Планета 1300',
    'modal2' => 'Трафик интернет - звезда 1400',
    'modal3' => 'Трафик интернет - галактика 1700',
    'modal4' => 'Трафик интернет - вселенная 2000',
    'modal5' => 'Трафик интернет - вселенная 2500',
    'modal6' => 'Трафик интернет + тв - планета 900',
    'modal7' => 'Трафик интернет + тв - звезда 1200',
    'modal8' => 'Трафик интернет + тв - галактика 1600',
    'modal9' => 'Трафик интернет + тв - вселенная 2000',
    'modal10' => 'Трафик интернет + тв - вселенная 2500',
    'online-call' => 'Онлайн звонок',
    'get-com' => 'Коммерческое предложение',
    'show-room' => 'Шоу рум',
    'consultant-business' => 'Консультация (для владельцев зданий, для бизнеса)',
    'consultant-people' => 'Консультация (для организации мероприятий, государственные организации, спортивных сооружений)',
    'calculation' => 'Индивидульное решение',
    'question' => 'Вопрос',
    'video' => 'Видео-презентацию в подарок'
);
$reqArray = array(
    'name' => 'Имя: ',
    'phone' => 'Номер телефона: ',
    'addres' => 'Адрес: ',
    'email' => 'E-mail: ',
    'height' => 'Высота: ',
    'width' => 'Ширина: ',
    'text' => 'Сообщение:
');
$utm = array(
    "phrase: "  => (isset($_POST['phrase']))  ? htmlspecialchars($_POST['phrase'])  : "",
    "referer: " => (isset($_POST['referer'])) ? htmlspecialchars($_POST['referer']) : "",
    "utm_engine: "   => (isset($_POST["utm_engine"]) && $_POST["utm_engine"] == "google") ? "google" : "yandex",
    "utm_term: "     => (isset($_POST["utm_term"])) ? urldecode($_POST["utm_term"]) : "",
    "utm_campaign: " => (isset($_POST["utm_campaign"])) ? $_POST["utm_campaign"] : "",
    "utm_source: "   => (isset($_POST["utm_source"])) ? $_POST["utm_source"] : "",
    "utm_medium: "   => (isset($_POST["utm_medium"])) ? $_POST["utm_medium"] : "",
    "utm_content: "  => (isset($_POST["utm_content"])) ? $_POST["utm_content"] : ""
);

$reqStatus = true;
$message = '';

$form = str_replace(array('modal ', ' active'), '', $_POST['form']);

if (isset($_POST['form'])) {
    $message .= 'Форма: <strong>' . $_POST['form'] . '</strong><br />';
}

foreach ($reqArray as $key => $value){
    if (isset($_POST[$key])){
        if (strlen($_POST[$key]) > 1){
            $message.= $value . '<strong>' . $_POST[$key] . '</strong><br />';
        } else {
            $reqStatus = false;
        }
    }
}

if (isset($_POST['text'])){
    $message.= 'Сообщение: <strong>' . $_POST['text'] . '</strong><br />';
};

foreach($utm as $key => $value) {
    $message.= $key . '<strong>' .$value . '</strong><br />';
}

if ($reqStatus){
    $headers = "From: vlad-issdergunov@yandex.kz \r\n" .
        "Reply-To: channel.my.honey@gmail.com \r\n" .
        'X-Mailer: PHP/' . phpversion();
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    if (mail('der9unov.vlad@yandex.kz', 'Заявка с сайта', $message, $headers)){
        echo $reqStatus;
    } else {
        echo false;
    }
} else {
    echo $reqStatus;
}
