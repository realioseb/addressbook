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
    
        <div class="header border" id="left">
            Contacts:
        </div>
        <div class="header border" id="right">
                Contact Info:
        </div>
        <div class="header border button" id="add_button" title="Create new contact">
                    ADD
        </div>
        <div style="clear: both;"></div>
        
        <div class="content border" id="list">
            <form class="search_form">
                <input type="search_address" id="search_address" placeholder="Type contact name">
            </form>
        </div>
        <div class="content border" id="info">
            
        </div>
        <div style="clear: both;"></div>
    </div>
    <script src="https://code.jquery.com/jquery.js"></script>
  </body>
</html>