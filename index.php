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
            <table>
                <tr>
                    <td class="field_names">
                        First Name:
                    </td>
                    <td class="input_container">
                        <input type="text" name="firstname">
                    </td>
                </tr>
                <tr>
                    <td class="field_names">
                        Last Name:
                    </td>
                    <td class="input_container">
                        <input type="text" name="lastname">
                    </td>
                </tr>
                <tr>
                    <td class="field_names">
                        Phone Number:
                    </td>
                    <td class="input_container">
                        <input type="tel" name="phone">
                    </td>
                </tr>
                <tr>
                    <td class="field_names">
                        Email Address:
                    </td>
                    <td class="input_container">
                        <input type="email" name="email">
                    </td>
                </tr>
                <tr>
                    <td class="field_names">
                        Physical Address:
                    </td>
                    <td class="input_container">
                        <input type="text" name="address">
                    </td>
                </tr>
                <tr>
                    <td class="field_names">
                        
                    </td>
                    <td class="input_container">
                        <button name="cancel" class="add_button">Cancel</button>
                        <button name="save" class="add_button">Save</button>
                    </td>
                </tr>
            </table>
        </div>
        <div style="clear: both;"></div>
    </div>
    <script src="https://code.jquery.com/jquery.js"></script>
  </body>
</html>