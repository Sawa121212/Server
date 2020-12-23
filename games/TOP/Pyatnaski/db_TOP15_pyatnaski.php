<body>
    <?php
   $servername_pytn = "localhost";
   $username_pytn = "id8435427_god";// имя пользователя см. рис. 2 
   $password_pytn = "GodMode";// пароль к БД, при необходимости его можно изменить см. рис. 2 
   $database_pytn = "id8435427_topusers";// имя БД рис. 2 
   $db_table_pytn = "toppyatnaski"; // имя таблицы с  которой будем работать  

   // Create connection
   $conn_pytn = mysqli_connect($servername_pytn, $username_pytn, $password_pytn, $database_pytn);

    $select_pytn= mysqli_query($conn_pytn, "SELECT usernik, score, date FROM toppyatnaski ORDER BY score ASC;"); 

echo "<table align=center style='text-align: center;padding: 25px; border-spacing: 50px 5px;'>";

echo "<tr>
        <th>Место</th>
        <th>Игрок</th>
        <th>Счет</th>
        <th>Дата</th>
    </tr>";

    
//Обрабатывает ряд результата запроса, возвращая ассоциативный массив, численный массив или оба.
    $num_pytn = 1;
    while ($r_pytn= mysqli_fetch_array($select_pytn)) {
        if($num_pytn < 16){
            echo "<tr><td>". $num_pytn ."</td><td>";
            echo $r_pytn['usernik'] . "  </td><td> "; 
            echo $r_pytn['score'] . " </td><td> "; 
            echo $r_pytn['date'] . "</td></tr>";
            $num_pytn++;
        }
    } 

    if($num_pytn < 16)
    {
        while ($num_pytn < 16){
            echo "<tr><td>".$num_pytn."</td><td>";
            echo "</td><td> "; 
            echo "</td><td> "; 
            echo "</td></tr>";
            $num_pytn++;
        }
    }
    
echo "</table>";

mysqli_close($conn_pytn);// закрываем подключение к БД.
?> 

</body>