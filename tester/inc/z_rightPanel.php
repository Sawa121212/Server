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
                        <!--<svg class='svg_icon' enable-background='new 0 0 24 24' focusable='false' height='20' viewBox='0 0 24 24' width='20' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><path d='M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z'></path></svg>
                        <span class='icon_text'>Регистрация</span></a>-->
                        <i class='material-icons left small' style='line-height: inherit;'>person_add</i>Регистрация</a>";
            }
            echo "</div></li>";


            ///TODO bold active
            if (!empty($_SESSION['logged_user'])) {
                echo "<li class='bold'>
                        <a href='" . $folderRoot . "tool/mybase.php' class='waves-effect waves-teal'>Управление тестами</a>
                   </li>";
            }
        ?>
    </ul>
</header>


