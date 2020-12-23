<body>
    <?php
$servername_hard = "localhost";
$username_hard = "id8435427_god";// имя пользователя см. рис. 2 
$password_hard = "GodMode";// пароль к БД, при необходимости его можно изменить см. рис. 2 
$database_hard = "id8435427_topusers";// имя БД рис. 2 
$db_table_hard = "topkorovkahard"; // имя таблицы с  которой будем работать  

// Create connection
$conn_hard = mysqli_connect($servername_hard, $username_hard, $password_hard, $database_hard);


$select= mysqli_query($conn_hard, "SELECT usernik, score, date FROM topkorovkahard ORDER BY score ASC;"); 

echo "<table align=center>";

echo "<tr>
        <th>Место</th>
        <th>Игрок</th>
        <th>Счет</th>
        <th>Дата</th>
    </tr>";

    
//Обрабатывает ряд результата запроса, возвращая ассоциативный массив, численный массив или оба.
    $num = 1;
    $point = FALSE;
    while ($r= mysqli_fetch_array($select)) {
        if($num < 16){
            echo "<tr><td>".$num."</td><td>";
            echo $r['usernik'] . " </td><td> "; 
            echo $r['score'] . " </td><td> "; 
            echo $r['date'] . "</td></tr>";
            $num++;
        }
    } 

    if($num < 16)
    {
        while ($num < 16){
            echo "<tr><td>".$num."</td><td>";
            echo "</td><td> "; 
            echo "</td><td> "; 
            echo "</td></tr>";
            $num++;
        }
    }
    
echo "</table>";

mysqli_close($conn_hard);// закрываем подключение к БД.
?> 

</body>