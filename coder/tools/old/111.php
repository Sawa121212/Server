<?php
  session_start(); 
?>
	<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">

<?php
    $string = 'cup';
    $name = 'coffee';
    $str = "This is a $string with my $name in it.";
    echo $str;
    echo "<br>";
    //eval("echo $str='$str';");
?>
<?php 
    if (!isset($_SESSION['counter'])) $_SESSION['counter']=0;
    echo "�� - ". $_SESSION['login']. ". ��� ��� �������� - ";
    if($_SESSION['usertype'] == 1){echo "�������������";};
    if($_SESSION['usertype'] == 2){echo "�������������";};
    if($_SESSION['usertype'] == 3){echo "�������";};
    echo "<br>�� �������� ��� �������� ".$_SESSION['counter']++." ���. ";
    echo "<br><a href=".$_SERVER['PHP_SELF'].">��������"; 
?>