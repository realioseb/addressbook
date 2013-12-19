<!DOCTYPE html>
<html>
  <head>
    <title>Address Book</title>
    <link rel="stylesheet" type="text/css" href="Style.css">
  </head>
  <body>
    <div class="container">
        <h1>My address book</h1>
        <br>
    
        <div class="MainStyle border" id="left">
            Contacts:
        </div>
        <div class="MainStyle border" id="right">
                Contact Info:
        </div>
        <div class="MainStyle border buttons" id="add_button" title="Create new contact" onclick="CreateContact()">
                    +
        </div>
        <div style="clear: both;"></div>
        
        <div class="content border" id="list">
            <?php 
                require_once './functions.php'; 
                $result = findAll();
                foreach ($result->fetchAll(PDO::FETCH_ASSOC) as $contact)
                {
                    echo '<div class="MainStyle buttons OneFromList" id=' . '"id' .
                          $contact['ID'] . '">' . $contact['FirstName'] . " " . $contact['LastName'] . '</div>';
                }
            ?>
        </div>
        
        <div class="content border" id="info">
            <form action="" method="post" id="mainform">
                <h4 id="infoheader">Create New Contact:</h4>
                <table>
                    <tr>
                        <td class="titles">First Name:</td>
                        <td class="inputs"><input type="text" name="firstname"></td>
                    </tr>
                    <tr>
                        <td class="titles">Last Name:</td>
                        <td class="inputs"><input type="text" name="lastname"></td>
                    </tr>
                    <tr>
                        <td class="titles">Phone Number:</td>
                        <td class="inputs"><input type="tel" name="phone"></td>
                    </tr>
                    <tr>
                        <td class="titles">Email Address:</td>
                        <td class="inputs"><input type="email" name="email"></td>
                    </tr>
                    <tr>
                        <td class="titles">Physical Address:</td>
                        <td class="inputs"><input type="text" name="address"></td>
                    </tr>
                    <tr>
                        <td class="titles"></td>
                        <td class="inputs">
                            <button type="button" class="buttons MainStyle" id="SC">Save</button>
                            <button type="button" class="buttons MainStyle" onclick="CancelForm()">Cancel</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        
        <form class="search_form border">
            <input type="search_address" id="search_address" placeholder="Type contact name">
        </form>
        
        <div style="clear: both;"></div>
    </div>
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="javascript.js"></script>
  </body>
</html>