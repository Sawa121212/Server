<?
// Скрипт проверки
# Соединямся с БД

if (isset($_COOKIE['id']) and isset($_COOKIE['hash']))
{
    $query = mysql_query("SELECT *,INET_NTOA(user_ip) FROM users WHERE user_id = '".intval($_COOKIE['id'])."' LIMIT 1");

    $userdata = mysql_fetch_assoc($query);

    if(($userdata['user_hash'] !== $_COOKIE['hash']) || ($userdata['user_id'] !== $_COOKIE['id']) ||
     (($userdata['user_ip'] !== $_SERVER['REMOTE_ADDR'])  && ($userdata['user_ip'] !== "0")))
    {
        setcookie("id", "", time() - 3600*24*30*12, "/");
        setcookie("hash", "", time() - 3600*24*30*12, "/");
        print "Хм, что-то не получилось";
    }
    else
    {
        print "Привет, ".$userdata['login'].". Всё работает!";
    }
}
else
{
    print "Включите куки";
}

?>
