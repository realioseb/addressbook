<?php
    require_once '../lib/functions.php';
    $id = $_GET['id'];
    $contact = findOne($id);
    echo \json_encode($contact);