<?php
    require_once '../lib/functions.php';
    $contact = array(
        0 => $_POST['id'],
        1 => $_POST['fn'],
        2 => $_POST['ln'],
        3 => $_POST['ph'],
        4 => $_POST['ml'],
        5 => $_POST['dr']
    );
    
    $edit = editContact($contact);
    
    echo \json_encode($edit);