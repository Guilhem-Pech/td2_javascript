<?php

session_start();
$result = array('estConnecte'=> true,'message'=>'');

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Fri, 13 Feb 1998 01:00:00 GMT');
header('Content-type: application/json');

if(isset($_SESSION['ID'])){
    echo json_encode($result);
}else{
    $result['estConnecte'] = false;
    $result['message'] = 'User not connected';
    echo json_encode($result);
}