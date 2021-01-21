<?php
    if ($_SESSION['usertype'] == 1) {
        echo "Администратор";
    }
    else if ($_SESSION['usertype'] == 2) {
        echo "Редактор";
    }
    else if ($_SESSION['usertype'] == 3) {
        echo "Пользователь";
    } else echo "Гость";
?>