<?php
    $folderRootCount = 2;
    include("../inc/functions/func_folderRoot.php");
    include($folderRoot . "inc/functions/func_SESSION.php");
    include($folderRoot . "inc/functions/func_captcha.php");
    CancelIsLogout($folderRoot);
    require $folderRoot . 'conn/db.php';
    $file_name = basename(__FILE__);

    include($folderRoot . "inc/alertStyle.php");
    $data = $_POST;
    $errors = array();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <? include($folderRoot . "inc/z_head.php"); ?>
    <title>Профиль</title>
</head>
<body>
<!--left panel-->
<? include($folderRoot . "inc/z_rightPanel.php"); ?>

<!--index-->
<main>
    <div class="container ">
        <br>
        <?php
            $query = $link->query("SELECT * FROM users WHERE login='" . $_SESSION['login'] . "'");
            $user = $query->fetch(\PDO::FETCH_ASSOC);

            $_SESSION['logged_user'] = $user;
            $_SESSION['second_name'] = $user['second_name'];
            $_SESSION['tabel_id'] = $user['tabel_id'];
            $_SESSION['first_name'] = $user['first_name'];
            $_SESSION['patronymic'] = $user['patronymic'];
            $_SESSION['login'] = $user['login'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['uid'] = $user['uid'];
            $_SESSION['usertype'] = $user['usertype'];
            $_SESSION['theme'] = $user['theme'];
            $_SESSION['blocked'] = $user['is_blocked'];

        ?>
        <div class="row" align="center">
            <h3><i class="material-icons small">person</i>Профиль</h3>
        </div>
        <!--   Icon Section   -->
        <div class="row">
            <ul class="collection">
                <li class="collection-item avatar">
                    <i class="material-icons circle blue darken-3">account_circle</i>
                    <span class="title"><h6><b>ФИО</b></h6></span>
                    <p><input id="fio" type="text" class="validate"
                        <?php
                            echo "value='";
                            echo $user['second_name'] . " " . $user['first_name'] . " " . $user['patronymic'];
                            echo "'>";
                        ?>
                    </p>
                    <a class="secondary-content btn modal-trigger" href="#modalFIO"><i
                                class="material-icons">save</i></a>
                </li>
                <li class="collection-item avatar">
                    <i class="material-icons circle green">account_circle</i>
                    <span class="title"><h6><b>Логин</b></h6></span>
                    <p><input id="login" type="text" class="validate"
                        <?php
                            echo "value='";
                            echo $user['login'];
                            echo "'>";
                        ?>
                    </p>
                    <a class="secondary-content btn modal-trigger" href="#modalLogin"><i
                                class="material-icons">save</i></a>
                </li>
                <li class="collection-item avatar">
                    <i class="material-icons circle">how_to_reg</i>
                    <span class="title"><h6><b>Тип пользователя</b></h6></span>
                    <?php echo "<p>";
                        include($folderRoot . "inc/functions/func_usertype.php");
                        echo "</p>";
                    ?>
                </li>

                <li class="collection-item avatar">
                    <i class="material-icons circle orange">mail</i>
                    <span class="title"><h6><b>Email</b></h6></span>
                    <p><input id="email" type="text" class="validate"
                        <?php
                            echo "value='";
                            echo $user['email'];
                            echo "'>";
                        ?>
                    </p>
                    <a class="secondary-content btn modal-trigger" href="#modalEmail"><i
                                class="material-icons">save</i></a>
                </li>
                <li class="collection-item avatar">
                    <i class="material-icons circle red">vpn_key</i>
                    <span class="title"><h6><b>Пароль</b></h6></span>
                    <p>зашифрован</p>
                    <a class="secondary-content btn modal-trigger" href="#modal1"><i class="material-icons">save</i></a>
                </li>

                <!--Тема оформления-->
                <li class="collection-item avatar">
                    <i class="material-icons circle black">palette</i>
                    <span class="title"><h6><b>Тема оформления</b></h6></span>
                    <form action="<?php $_SERVER['PHP_SELF'] ?>" method='post'>
                        <p>
                            <label>
                                <input class="with-gap" name="group1" value="0"
                                       type="radio" <?php if ($user['theme'] == "0") echo "checked" ?> />
                                <span>Светлая тема</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input class="with-gap" name="group1" value="1"
                                       type="radio" <?php if ($user['theme'] == "1") echo "checked" ?> />
                                <span>Темная тема</span>
                            </label>
                        </p>
                        <button class="btn blue darken-2 waves-effect waves-light z-depth-2" type="submit"
                                name="do_editThema">Применить<i class="material-icons left">create</i></button>
                        <?php
                            //если кликнули на button
                            if (isset($data['do_editThema'])) {
                                $thema1 = $_POST['group1'];
                                try {
                                    $result_rep = "UPDATE users SET theme='" . $thema1 . "' where login='" . $_SESSION['login'] . "' ";
                                    $link->exec($result_rep);
                                    $_SESSION['thema'] = $thema1;
                                    header('Location:'. $file_name);
                                    exit;
                                } catch (PDOException $e) {
                                    echo "<span style='color: red;'>Ошибка: " . $e->getMessage() . "</span>";
                                }
                            }
                        ?>

                </li>
            </ul>

        </div>  <!-- /row center -->
    </div>
</main>

<!--footer-->
<?php
    include($folderRoot . "inc/z_footer.php");
?>

</body>
</html>