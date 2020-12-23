<body>
    <?php
   $servername = "localhost";
   $username = "id8435427_god";// имя пользователя см. рис. 2 
   $password = "GodMode";// пароль к БД, при необходимости его можно изменить см. рис. 2 
   $database = "id8435427_topusers";// имя БД рис. 2 
   $db_table = "topkorovkahard"; // имя таблицы с  которой будем работать  

   // Create connection
   $conn = mysqli_connect($servername, $username, $password, $database);

    $select= mysqli_query($conn, "SELECT usernik, score, date FROM topkorovkahard ORDER BY score ASC;"); 

echo "<table align=center style='text-align: center;padding: 25px; border-spacing: 50px 5px;'>";

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
        if($num < 4){
            echo "<tr><td>".$num."</td><td>";
            echo $r['usernik'] . "  </td><td> "; 
            echo $r['score'] . " </td><td> "; 
            echo $r['date'] . "</td></tr>";
            $num++;
        }
    } 

    if($num < 4)
    {
        while ($num < 4){
            echo "<tr><td>".$num."</td><td>";
            echo "</td><td> "; 
            echo "</td><td> "; 
            echo "</td></tr>";
            $num++;
        }
    }
    
echo "</table>";

mysqli_close($conn);// закрываем подключение к БД.
?> 

</body>