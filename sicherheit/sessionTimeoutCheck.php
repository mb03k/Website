<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if(!isset($_SESSION)) 
{ 
    session_start(); 
} 

if (!isset($_SESSION['login_time']) || !isset($_SESSION['session_ablauf'])) {
    header("Location: https://weristmatthes.de/sicherheit/logout.php");
    die("Bitte einloggen!");
}

if ((time() - $_SESSION['login_time']) > $_SESSION['session_ablauf']) {
    header("Location: https://weristmatthes.de/sicherheit/logout.php");
    die("Session ist abgelaufen. Bitte erneut einloggen!");
}
?>