<?php
    $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    //echo $url;
    // http://localhost:8383/tester/    - три слэша
    $folderRootCount = substr_count ($url, '/') - 3;
    //echo $folderRootCount;
    $folderRoot = "";
    if ($folderRootCount > 1) {
        for ($i = 1; $i < $folderRootCount; $i++) {
            $folderRoot = $folderRoot . "../";
        }
    }
?>