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
        $email = stripslashes($_POST['email']);
        $error = '';
        $subject = 'Центр моды и дизайна D3 - подписка';
        $message = '
            <html>
                    <head>
                            <title>Обращение</title>
                    </head>
                    <body>
                            <b>Данные отправителя:</b><br><br>
                            <p>E-mail: '.$email.'</p>

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
            $mail = mail('design@vmdpni.ru', $subject, $message,
                 "From: ".$email." <".$email.">\r\n"
                ."Reply-To: ".$email."\r\n"
                ."Content-type: text/html; charset=utf-8 \r\n"
                ."X-Mailer: PHP/" . phpversion());
            if($mail){
                echo 'OK';
            }
        }else{
            echo '<div class="bg-danger">'.$error.'</div>';
        }
    }
?>