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
        <div class="left_list">
            <div class="list_header">
                Contacts:
            </div>
            <ul class="contacts">
                <li>soso</li>
                <li>gio</li>
                <li>teo</li>
            </ul>
            <form class="search_form">
                <input type="search_address" id="search_address" placeholder="Type contact name">
            </form>
        </div>

        <div class="right_content">
            <div class="right_header">
                <h3>Contact Info:</h3>
                <div class="add_button">
                    Add
                </div>
                <div style="clear: both"></div>
            </div>
        </div>
        <div style="clear: both;"></div>
    </div>
    <script src="https://code.jquery.com/jquery.js"></script>
  </body>
</html>