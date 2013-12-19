// axali kontaqtis dasamatebeli funqcia
$(document).ready(function(){
    $("#add_button").click(function(){
        $('#mainform').show();
        $('#infoheader').html('Create New Contact:');
        $("#fname").html('<input type="text" name="firstname">');
        $("#lname").html('<input type="text" name="lastname">');
        $("#phoneline").html('<input type="tel" name="phone">');
        $("#mailline").html('<input type="email" name="email">');
        $("#addressline").html('<input type="text" name="address">');
        $('#butt1').html('Create');
        $('#butt2').html('Cancel');
    });
});

// gauqmeba
$(document).ready(function(){
    $("#butt2").click(function(){
        if(window.confirm("Quit without saving?"))
            $('#mainform').hide();
    });
});

