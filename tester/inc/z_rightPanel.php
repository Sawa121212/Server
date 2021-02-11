<nav class="nav-extended" role="navigation">
    <div class="nav-wrapper z-depth-2">
        <a href="<?= $folderRoot ?>index.php" class="brand-logo left"><i class="material-icons"
                                                                         style="margin-left: 5px;">home</i></a>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger right Tiny"><i class="material-icons">menu</i></a>
    </div>
</nav>

<header xmlns="http://www.w3.org/1999/html">
    <ul id="nav-mobile" class="sidenav sidenav-fixed">
        <!--Аккаунт-->
        <?php
            echo "<li><div class='user-view'>
                    <div class='background'>
                        <img src='" . $folderRoot . "img/office.jpg'>
                    </div>";
            echo "<a href='" . $folderRoot . "account/account_profile.php'><img class='circle' src='" . $folderRoot . "img/worker.jpg'>";
            echo "<span class='white-text name'><b>";
            include($folderRoot . "inc/functions/func_usertype.php");
            echo "</b></span></a>";

            if (isset($_SESSION['logged_user'])) {
                echo "<a href='#name'><span class='white-text name'>" . $_SESSION['second_name'] . "&nbsp" . $_SESSION['first_name'] . "</span></a>
                      <a href='#email'><span class='white-text email'>" . $_SESSION['email'] . "</span></a>";
                
                echo "</a><a href='" . $folderRoot . "account/account_logout.php'><i class='material-icons left small' style='line-height: inherit;'>power_settings_new</i>Выйти</a>";
            } else {
                echo "<a href='" . $folderRoot . "account/account_login.php' class='white-text'>
                        <i class='material-icons left small' style='line-height: inherit;'>person</i>
                         Войти</a><br>";
                echo "<a href='" . $folderRoot . "account/account_signup.php' class='white-text'>
                        <i class='material-icons left small' style='line-height: inherit;'>person_add</i>Регистрация</a>";
            }
            echo "</div></li>";


            $adminBtnStyle = "border: 1px solid;border-color: darkcyan;";

            ///TODO bold active
            if (!empty($_SESSION['logged_user'])) {
                echo "<li class='bold'>
                        <a href='" . $folderRoot . "tool/mybase.php' class='waves-effect waves-teal'>Мои тесты</a>
                   </li>";
                if ($_SESSION['usertype'] == 1) {
                    echo "<li class='bold'>
                        <a href='" . $folderRoot . "adminer/news.php' class='waves-effect waves-teal' style='" . $adminBtnStyle . "'>Управление новостями</a>
                   </li>";
                    echo "<li class='bold'>
                        <a href='" . $folderRoot . "adminer/adminpanel.php' class='waves-effect waves-teal' style='" . $adminBtnStyle . "'>Администрирование</a>
                   </li>";
                }
            }
        ?>
    </ul>
</header>


