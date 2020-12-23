<body>
    <?php

    $servername_lite = "localhost";
   $username_lite = "id8435427_god";// имя пользователя см. рис. 2 
   $password_lite = "GodMode";// пароль к БД, при необходимости его можно изменить см. рис. 2 
   $database_lite = "id8435427_topusers";// имя БД рис. 2 
   $db_table_lite = "topkorovkalite"; // имя таблицы с  которой будем работать  

    // Create connection
    $conn_lite = mysqli_connect($servername_lite, $username_lite, $password_lite, $database_lite);


    $select= mysqli_query($conn_lite, "SELECT usernik, score, date FROM topkorovkalite ORDER BY score ASC;"); 

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

mysqli_close($conn_lite);// закрываем подключение к БД.
?> 

</body>