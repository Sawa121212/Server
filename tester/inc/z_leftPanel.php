<header>
    <a href="#" data-target="nav-mobile"
       class="top-nav sidenav-trigger waves-effect waves-light circle hide-on-large-only"><i
                class="material-icons">menu</i></a></div>
    <ul id="nav-mobile" class="sidenav sidenav-fixed">
        <div class="row">
            <!--Аккаунт-->
            <div class="input-field col s3">
                <li><i class="material-icons left medium">account_circle</i></li>
            </div>
            <div class="input-field col s9">
                <?php
                    if (isset($_SESSION['logged_user'])) {
                        echo "<li><a href='" . $folderRoot . "account/account_profile.php'>" . $_SESSION['login'] . "</a></li>";
                        echo "<li><p>";
                        include($folderRoot . "inc/functions/func_usertype.php");
                        echo "</p></li>";
                        echo "</a><a href='" . $folderRoot . "account/account_logout.php'>Выйти</a></li>";
                    } else {
                        echo "<li><a href='" . $folderRoot . "account/account_login.php'>Войти</a></li>";
                        echo "<li><a href='" . $folderRoot . "account/account_signup.php'>Регистрация</a></li>";
                    }
                ?>
            </div>
        </div>
        <? ///TODO bold active?>
        <li class="bold">
            <a href="<?= $folderRoot ?>index.php" class="waves-effect waves-teal">Главнвя Страница</a>
        </li>
        <li class="bold">
            <a href="<?= $folderRoot ?>create/mybase.php" class="waves-effect waves-teal">Мои тест</a>
        </li>
        <li class="bold">
            <a href="<?= $folderRoot ?>pass/passquestion.php" class="waves-effect waves-teal">Пройти тесты</a>
        </li>
    </ul>
</header>


