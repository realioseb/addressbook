<?php
function dbConnect()
{
    $conn = new PDO('mysql:host=localhost;dbname=addressbook', 'root', '');
    
    return $conn;
}

function findAll()
{
    $db = dbConnect();
    
    $found = $db->query("SELECT * FROM contacts ORDER BY FirstName, LastName ASC");
    $result = $found->fetchAll(PDO::FETCH_ASSOC);
    
    return $result;
}

function findOne($id)
{
    $db = dbConnect();
    
    $result = $db->query("SELECT * FROM contacts WHERE `ID` = {$id}");
    $contact = $result->fetchAll(PDO::FETCH_ASSOC);
    
    return $contact[0];
}

function addContact($contact = array())
{
    $db = dbConnect();
    $prep = $db->prepare('INSERT INTO contacts (FirstName, LastName, Phone, Email, Address) VALUES (?, ?, ?, ?, ?)');
    $prep->execute(array($contact[0], $contact[1], $contact[2], $contact[3], $contact[4]));
    $rows = $prep->rowCount();

    return !!$rows;
}

function editContact($contact = array())
{
    $db = dbConnect();
    $prep = $db->prepare('UPDATE contacts SET FirstName=?, LastName=?, Phone=?, Email=?, Address=? WHERE `ID`=?');
    $prep->execute(array($contact[1], $contact[2], $contact[3], $contact[4], $contact[5], $contact[0]));
    $rows = $prep->rowCount();

    return !!$rows;
}

function removeContact($id)
{
    $db = dbConnect();
    $prep = $db->prepare('DELETE FROM contacts WHERE `ID` = ?');
    $prep->execute(array($id));
    $rows = $prep->rowCount();

    return !!$rows;
}