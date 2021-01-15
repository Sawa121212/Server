<?php
    function captcha_show($folderRoot)
    {
        $questions = array(
            1 => "<img src='" . $folderRoot . "conn/captcha/1.png' alt='captcha' class='z-depth-2'>",
            2 => "<img src='" . $folderRoot . "conn/captcha/2.png' alt='captcha' class='z-depth-2'>",
            3 => "<img src='" . $folderRoot . "conn/captcha/3.png' alt='captcha' class='z-depth-2'>",
            4 => "<img src='" . $folderRoot . "conn/captcha/4.png' alt='captcha' class='z-depth-2'>",
            5 => "<img src='" . $folderRoot . "conn/captcha/5.png' alt='captcha' class='z-depth-2'>",
            6 => "<img src='" . $folderRoot . "conn/captcha/6.png' alt='captcha' class='z-depth-2'>"
        );
        $num = mt_rand(1, count($questions));
        $_SESSION['captcha'] = $num;
        echo $questions[$num];
    }

    $answers = array(
        1 => '2by33',
        2 => 'n32f9',
        3 => 'b4q61',
        4 => 'rn5y3',
        5 => 'gpx3t',
        6 => 'p26wj'
    );
?>