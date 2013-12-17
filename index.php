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
        <div class="MainStyle border button" id="add_button" title="Create new contact">
                    ADD
        </div>
        <div style="clear: both;"></div>
        
        <div class="content border" id="list">
        </div>
        
        <div class="content border" id="info">
        </div>
        
        <form class="search_form border">
            <input type="search_address" id="search_address" placeholder="Type contact name">
        </form>
        
        <div style="clear: both;"></div>
    </div>
    <script src="https://code.jquery.com/jquery.js"></script>
  </body>
</html>