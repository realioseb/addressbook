<?php 
    require_once './lib/functions.php'; 
    $result = findAll();
    
    foreach ($result as $contact)
    {
        echo '<div class="main-style buttons one-from-list" id=' . $contact['ID'] .
             '>' . $contact['FirstName'] . " " . $contact['LastName'] . '</div>';
    }