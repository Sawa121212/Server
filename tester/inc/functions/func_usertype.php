<?php
    if ($_SESSION['usertype'] == 1) {
        echo "Администратор";
    }
    if ($_SESSION['usertype'] == 2) {
        echo "Редактор";
    }
    if ($_SESSION['usertype'] == 3) {
        echo "Пользователь";
    }
?>