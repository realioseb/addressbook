<?php
    require_once '../lib/functions.php';
    $contact = array(
        0 => $_POST['fn'],
        1 => $_POST['ln'],
        2 => $_POST['ph'],
        3 => $_POST['ml'],
        4 => $_POST['dr']
    );
    
    $create = addContact($contact);
    
    echo \json_encode($create);