<body>
    <?php
    $select= mysqli_query($conn, "SELECT fio, sex, login FROM registration;"); 

while ($r= mysqli_fetch_array($select)) { 
        echo $r['fio'] . " "; 
        echo $r['sex'] . " "; 
        echo $r['login'] . "<br />"; 
} 

mysqli_close($conn);// закрываем подключение к БД.
    ?> 
</body>