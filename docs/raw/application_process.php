<?php
//  function ValidateEmail($value)
//
//    {
//        $regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';
//        if($value == '') {
//            return false;
//        } else {
//            $string = preg_replace($regex, '', $value);
//        }
//        return empty($string) ? true : false;
//    }

    if (!empty($_POST)) {
        $name = stripslashes($_POST['name']);
        $email = stripslashes($_POST['email']);
        $phone = stripslashes($_POST['phone']);
        $text = stripslashes($_POST['text']);
        $page = stripslashes($_POST['page']);
        $page_name = stripslashes($_POST['page_name']);
        $error = '';
        $subject = 'Институт Организационной Психологии. Сообщение из формы обратной связи.';
        if ($page) {
            $textPage = "<p>Страница с которой отправлен запрос: ".$_POST['page']. " (" .$_POST['page_name'].")</p>";

        }
        $message = '
            <html>
                    <head>
                            <title>Обращение</title>
                    </head>
                    <body>
                            <b>Данные отправителя:</b><br><br>
                            <p>Имя: '.$name.'</p>
                            <p>E-mail: '.$email.'</p>
                            <p>Телефон: '.$phone.'</p>
                            <p>Текст обращения: '.$text.'</p><br>
                            '.$textPage.'

                    </body>
            </html>';
        // если в заголовках есть русские буквы - то их нужно кодировать, т.к.
        // в Content-Type задаётся только кодировка тела, которое может быть отослано в любой кодировке.
        // это необходимо для нормлаьного отображения в OUTLOOK и THE BAT
        $name = '=?UTF-8?B?'.base64_encode($name).'?=';
        $subject = '=?UTF-8?B?'.base64_encode($subject).'?=';
//      if (!ValidateEmail($email)){
//          $error = '<p class="bg-danger">Email введен неправильно!</p>';
//      }
        if(!$error){
            $mail = mail('ai.kovalenko@mail.ru', $subject, $message,
                 "From: ".$name." <".$email.">\r\n"
                ."Reply-To: ".$email."\r\n"
                ."Content-type: text/html; charset=utf-8 \r\n"
                ."X-Mailer: PHP/" . phpversion());
            header('Location: success.php');
            if($mail){
                echo 'OK';
            }
        }else{

        }
    }
?>