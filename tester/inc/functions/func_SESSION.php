<?php
    if (empty($_SESSION['second_name'])) {
        $_SESSION['second_name'] = "ошибка";
    }
    if (empty($_SESSION['first_name'])) {
        $_SESSION['first_name'] = "ошибка";
    }
    if (empty($_SESSION['patronymic'])) {
        $_SESSION['patronymic'] = "ошибка";
    }
    if (empty($_SESSION['login'])) {
        $_SESSION['login'] = "ошибка";
    }
    if (empty($_SESSION['email'])) {
        $_SESSION['email'] = "ошибка";
    }
    if (empty($_SESSION['usertype'])) {
        $_SESSION['usertype'] = 4;
    }
    if (empty($_SESSION['theme'])) {
        $_SESSION['theme'] = 0;
    }
?>