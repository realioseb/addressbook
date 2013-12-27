<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Address Book</title>
    <link rel="stylesheet" type="text/css" href="style/Style.css">
    <?php
        require_once 'lib/utils.php';
    ?>
  </head>
  <body>
    <div class="container">
        <h1>My address book</h1>
        <br>
    
        <div class="main-style border" id="left">
            Contacts:
        </div>
        <div class="main-style border" id="right">
                Contact Info:
        </div>
        <div class="main-style border buttons" id="add_button" title="Create new contact" onclick="CreateContact()">
                    +
        </div>
        <div style="clear: both;"></div>
        
        <div class="content border" id="list">
            <?php
                echo $list;
            ?>
        </div>
        
        <div class="content border" id="info">
            <form action="" method="post" id="mainform">
                <h4 id="infoheader"></h4>
                <table>
                    <tr>
                        <td class="titles">First Name:</td>
                        <td class="inputs" id="fname"></td>
                    </tr>
                    <tr>
                        <td class="titles">Last Name:</td>
                        <td class="inputs" id="lname"></td>
                    </tr>
                    <tr>
                        <td class="titles">Phone Number:</td>
                        <td class="inputs" id="phoneline"></td>
                    </tr>
                    <tr>
                        <td class="titles">Email Address:</td>
                        <td class="inputs" id="mailline"></td>
                    </tr>
                    <tr>
                        <td class="titles">Physical Address:</td>
                        <td class="inputs" id="addressline"></td>
                    </tr>
                    <tr>
                        <td class="titles"></td>
                        <td class="inputs">
                            <button type="button" class="buttons main-style" id="butt1"></button>
                            <button type="button" class="buttons main-style" id="butt2"></button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        
        <form class="border" id="search-form">
            <input id="search-input" placeholder="Type contact name">
        </form>
        
        <div style="clear: both;"></div>
    </div>
    <script src="javascript/jquery-1.10.2.min.js"></script>
    <script src="javascript/javascript.js"></script>
  </body>
</html>