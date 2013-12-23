<?php
    require_once '../lib/functions.php';
    $id = $_POST['id'];
    
    $delete = removeContact($id);
    
    echo \json_encode($id);