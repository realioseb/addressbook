var contact, id, buttonId1 = '#butt1', buttonId2 = '#butt2';

$(document).ready(function(){

//  axali kontaqtis damatebis forma
    $("#add_button").click(function(){
        $('#mainform').show();
        $('#infoheader').html('Create New Contact:');
        $("#fname").html('<input type="text" name="firstname">');
        $("#lname").html('<input type="text" name="lastname">');
        $("#phoneline").html('<input type="text" name="phone">');
        $("#mailline").html('<input type="text" name="mail">');
        $("#addressline").html('<input type="text" name="address">');
        $(buttonId1).attr('id', 'create').html('Create');
        buttonId1 = '#create';
        $(buttonId2).attr('id', 'cancel').html('Cancel');
        buttonId2 = '#cancel';
    });

//  krieiti
    $(document).on("click", "#create", function(){
        fn = $('input[name=firstname]').val();
        ln = $('input[name=lastname]').val();
        ph = $('input[name=phone]').val();
        ml = $('input[name=mail]').val();
        dr = $('input[name=address]').val();
        
        $.post("ajax/createContact.php", {
            fn: fn,
            ln: ln,
            ph: ph,
            ml: ml,
            dr: dr
        }, function(data){
            ret = $.parseJSON(data);
            if(ret>0){
                $("#list").load(location.href + " #list > *");
                alert("Contact create successfully");
                $("#mainform").hide();
            } else {
                alert("Something went wrong");
            }
        });
    });

//  contaqtis infos chveneba
    $(document).on("click", "div.one-from-list", function(){
        id = $(this).attr('id');
        $.get("ajax/findContact.php?id=" + id, function(data) {
            contact = $.parseJSON(data);
            $('#mainform').show();
            $('#infoheader').html('Information:');
            $("#fname").html(contact.FirstName);
            $("#lname").html(contact.LastName);
            $("#phoneline").html(contact.Phone);
            $("#mailline").html(contact.Email);
            $("#addressline").html(contact.Address);
            $(buttonId1).attr('id', 'edit').html('Edit');
            buttonId1 = '#edit';
            $(buttonId2).attr('id', 'delete').html('Delete');
            buttonId2 = '#delete';
        });
    });

//  contaqtis cvlileba
    $(document).on("click", "#edit", function(){
        $('#mainform').show();
        $('#infoheader').html('Edit Contact:');
        $("#fname").html('<input type="text" name="firstname" value="' + contact.FirstName + '">');
        $("#lname").html('<input type="text" name="lastname" value="' + contact.LastName + '">');
        $("#phoneline").html('<input type="text" name="phone" value="' + contact.Phone + '">');
        $("#mailline").html('<input type="text" name="mail" value="' + contact.Email + '">');
        $("#addressline").html('<input type="text" name="address" value="' + contact.Address + '">');
        $(buttonId1).attr('id', 'save').html('Save');
        buttonId1 = '#save';
        $(buttonId2).attr('id', 'cancel').html('Cancel');
        buttonId2 = '#cancel';
    });
    
//  kanceli!
    $(document).on("click", "#cancel", function(){
        $('#mainform').hide();
    });
    
//  apdeiti!
    $(document).on("click", "#save", function(){
        fn = $('input[name=firstname]').val();
        ln = $('input[name=lastname]').val();
        ph = $('input[name=phone]').val();
        ml = $('input[name=mail]').val();
        dr = $('input[name=address]').val();
        
        $.post("ajax/editContact.php", {
            id: id,
            fn: fn,
            ln: ln,
            ph: ph,
            ml: ml,
            dr: dr
        }, function(data){
            ret = $.parseJSON(data);
            if(ret>0){
                $("#list").load(location.href + " #list > *");
                alert("Contact updated successfully");
                $("#mainform").hide();
            } else {
                alert("Something went wrong");
            }
        });
    });
    
//  kontaqtis washla
    $(document).on("click", "#delete", function(){
        $.post("ajax/deleteContact.php", {
            id: id
        }, function(data){
            ret = $.parseJSON(data);
            if(ret>0){
                $("#list").load(location.href + " #list > *");
                alert("Contact deleted successfully");
                $("#mainform").hide();
            } else {
                alert("Something went wrong");
            }
        });
    });
    
//  serchi
    $(document).on("keyup", "#search-input", function(){
        $(".one-from-list").each(function(){
            var txt = $(this).text();
            var str = $("#search-input").val();
            if (txt.indexOf(str) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});