<!DOCTYPE html>
<html>
  <head>
    <title>Address Book</title>
    <link rel="stylesheet" type="text/css" href="style/Style.css">
    <?php
        function embed($tpl_file, $data) {
            extract($data);
            ob_start();
            include($tpl_file);
            $content = ob_get_contents();
            ob_end_clean();

            return $content;
          }
    ?>
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
                require_once './lib/functions.php'; 
                $result = findAll();
                foreach ($result->fetchAll(PDO::FETCH_ASSOC) as $contact)
                {
                    echo '<div class="MainStyle buttons OneFromList" id=' . $contact['ID'] .
                         '>' . $contact['FirstName'] . " " . $contact['LastName'] . '</div>';
                }
            ?>
        </div>
        
        <div class="content border" id="info">
            <?php
               $table = embed('table.php', array());
               echo  $table;
            ?>
        </div>
        
        <form class="search_form border">
            <input type="search_address" id="search_address" placeholder="Type contact name">
        </form>
        
        <div style="clear: both;"></div>
    </div>
    <script src="javascript/jquery-1.10.2.min.js"></script>
    <script src="javascript/javascript.js"></script>
  </body>
</html>