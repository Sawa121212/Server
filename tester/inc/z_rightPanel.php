<header>
    <a href="#" data-target="nav-mobile"
       class="top-nav sidenav-trigger waves-effect waves-light circle hide-on-large-only right"><i
                class="material-icons">menu</i></a>
    <ul id="nav-mobile" class="sidenav sidenav-fixed">
        <!--Аккаунт-->
        <?php
            echo "<li><div class='user-view'>
                    <div class='background'>
                        <img src='" . $folderRoot . "img/office.jpg'>
                    </div>";
            echo "<a href='" . $folderRoot . "account/account_profile.php'><img class='circle' src='" . $folderRoot . "img/worker.jpg'>";
            echo "<span class='white-text name'>";
            include($folderRoot . "inc/functions/func_usertype.php");
            echo "</span></a>";

            if (isset($_SESSION['logged_user'])) {
                echo "<a href='#name'><span class='white-text name'>" . $_SESSION['second_name'] . "&nbsp" . $_SESSION['first_name'] . "</span></a>
                        <a href='#email'><span class='white-text email'>" . $_SESSION['email'] . "</span></a>";


                include($folderRoot . "inc/functions/func_usertype.php");
                echo "</p></li>";
                echo "</a><a href='" . $folderRoot . "account/account_logout.php'>Выйти</a>";
            } else {
                echo "<a href='" . $folderRoot . "account/account_login.php' class='white-text'><i class='material-icons left small' style='line-height: inherit;'>account_circle</i>Войти</a><br>";
                echo "<a href='" . $folderRoot . "account/account_signup.php' class='white-text'><i class='material-icons left small' style='line-height: inherit;'>account_circle</i>Регистрация</a>";
            }
            echo "</div></li>";
        ?>

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


