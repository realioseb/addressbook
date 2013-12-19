<?php
function dbConnect()
{
    $conn = new PDO('mysql:host=localhost;dbname=addressbook', 'root', '');
    
    return $conn;
}

function findAll()
{
    $db = dbConnect();
    
    $result = $db->query("SELECT * FROM contacts");
    
    return $result;
}

function findOne($id)
{
    $db = dbConnect();
    
    $result = $db->query("SELECT * FROM contacts WHERE `ID` = {$id}");
    
    return $result;
}

function addContact($contact = array())
{
    $db = dbConnect();
    $id = $contact['ID'];
    $fn = $contact['firstname'];
    $ln = $contact['lastname'];
    $ph = $contact['phone'];
    $e  = $contact['email'];
    $addrees = $contact['address'];
    $result = $db->query("INSERT INTO contacts FirstName, LastName, Phone, Email, Address VALUES($id, $fn, $ln, $ph, $e, $addrees)");
    
    return $result;
}

function editContact($contact = array())
{
    $db = dbConnect();
    $id = $contact['ID'];
    $fn = $contact['firstname'];
    $ln = $contact['lastname'];
    $ph = $contact['phone'];
    $e  = $contact['email'];
    $addrees = $contact['address'];
    $result = $db->query("UPDATE contacts SET FirstName=$fn LastName=$ln Phone=$ph Email=$e Address=$addrees WHERE `ID` = {$id}");
    
    return $result;
}

function removeContact($id)
{
    $db = dbConnect();
    
    $result = $db->query("DROP * FROM contacts WHERE `ID` = {$id}");
    
    return $result;
}