var contact, id, buttonId1 = '#butt1', buttonId2 = '#butt2';
var a1=2, a2=2, a3=2, a4=2, a5=2;

function checkIt(input_name, input_value){
    if (input_name === 'firstname') {
        y = /^[a-zA-Zა-ჰ0-9_-]{1,20}$/;
    } else if (input_name === 'lastname') {
        y = /^[a-zA-Zა-ჰ0-9_-]{1,30}$/;
    } else if (input_name === 'phone') {
        y = /^([+]?)(\d{3,15})$/;
    } else if (input_name === 'mail') {
        y = /^([a-zA-Z0-9._-]+)[@](\w+)[.](\w+)$/;
    } else {
        y = /^[^'"]{1,150}$/;
    }
    z = input_value.match(y);
    
    if (z !== null) {
        rez = true;
    } else {
        rez = false;
    }
    
    return rez;
}

$(document).ready(function(){

//  axali kontaqtis damatebis forma
    $("#add_button").click(function(){
        $('#mainform').show();
        $('#infoheader').html('Create New Contact:');
        $("#fname").html('<input type="text" name="firstname"><span></span>');
        $("#lname").html('<input type="text" name="lastname"><span></span>');
        $("#phoneline").html('<input type="text" name="phone"><span></span>');
        $("#mailline").html('<input type="text" name="mail"><span></span>');
        $("#addressline").html('<input type="text" name="address"><span></span>');
        $(buttonId1).attr('id', 'create').html('Create');
        buttonId1 = '#create';
        $(buttonId2).attr('id', 'cancel').html('Cancel');
        buttonId2 = '#cancel';
        a1=2, a2=2, a3=2, a4=2, a5=2;
    });

//  krieiti
    $(document).on("click", "#create", function(){
        a = a1*a2*a3*a4*a5;
        if (a > 1) {
            $("table").find("input").each(function(){
                p = $(this).prop("name");
                q = $(this).val();
                if (checkIt(p, q)) {
                    $(this).parent().children("span").attr('class', 'success').html('<img src="icons/yes.png" />');
                    $(this).parent().children("input").css('border', '1px solid #35babf');
                    if (p === 'firstname') {
                        a1 = 1;
                    } else if (p === 'lastname') {
                        a2 = 1;
                    } else if (p === 'phone') {
                        a3 = 1;
                    } else if (p === 'mail') {
                        a4 = 1;
                    } else if (p === 'address') {
                        a5 = 1;
                    }
                } else {
                    $(this).parent().children("span").attr('class', 'error').html('<img src="icons/no.png" />');
                    $(this).parent().children("input").css('border', '1px solid red');
                    if (p === 'firstname') {
                        a1 = 0;
                    } else if (p === 'lastname') {
                        a2 = 0;
                    } else if (p === 'phone') {
                        a3 = 0;
                    } else if (p === 'mail') {
                        a4 = 0;
                    } else if (p === 'address') {
                        a5 = 0;
                    }
                }
            });
        } else if (a < 1) {
            alert("recorrect errors!");
        } else {
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
                    alert("Contact created successfully");
                    $("#mainform").hide();
                } else {
                    alert("Something went wrong");
                }
            });
        }
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
            a1=2, a2=2, a3=2, a4=2, a5=2;
        });
    });

//  contaqtis cvlileba
    $(document).on("click", "#edit", function(){
        $('#mainform').show();
        $('#infoheader').html('Edit Contact:');
        $("#fname").html('<input type="text" name="firstname" value="' + contact.FirstName + '"><span></span>');
        $("#lname").html('<input type="text" name="lastname" value="' + contact.LastName + '"><span></span>');
        $("#phoneline").html('<input type="text" name="phone" value="' + contact.Phone + '"><span></span>');
        $("#mailline").html('<input type="text" name="mail" value="' + contact.Email + '"><span></span>');
        $("#addressline").html('<input type="text" name="address" value="' + contact.Address + '"><span></span>');
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
        a = a1*a2*a3*a4*a5;
        if (a > 1) {
            $("table").find("input").each(function(){
                p = $(this).prop("name");
                q = $(this).val();
                if (checkIt(p, q)) {
                    $(this).parent().children("span").attr('class', 'success').html('<img src="icons/yes.png" />');
                    $(this).parent().children("input").css('border', '1px solid #35babf');
                    if (p === 'firstname') {
                        a1 = 1;
                    } else if (p === 'lastname') {
                        a2 = 1;
                    } else if (p === 'phone') {
                        a3 = 1;
                    } else if (p === 'mail') {
                        a4 = 1;
                    } else if (p === 'address') {
                        a5 = 1;
                    }
                } else {
                    $(this).parent().children("span").attr('class', 'error').html('<img src="icons/no.png" />');
                    $(this).parent().children("input").css('border', '1px solid red');
                    if (p === 'firstname') {
                        a1 = 0;
                    } else if (p === 'lastname') {
                        a2 = 0;
                    } else if (p === 'phone') {
                        a3 = 0;
                    } else if (p === 'mail') {
                        a4 = 0;
                    } else if (p === 'address') {
                        a5 = 0;
                    }
                }
            });
        } else if (a < 1) {
            alert("recorrect errors!");
        } else {
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
        }
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
    
//  inputebis shemowmeba
    //saxeli
    $(document).on("blur", "input[name=firstname]", function(){
        p = $(this).prop("name");
        q = $(this).val();
        if (checkIt(p, q)) {
            $(this).parent().children("span").attr('class', 'success').html('<img src="icons/yes.png" />');
            $(this).parent().children("input").css('border', '1px solid #35babf');
            a1=1;
        } else {
            $(this).parent().children("span").attr('class', 'error').html('<img src="icons/no.png" />');
            $(this).parent().children("input").css('border', '1px solid red');
            a1=0;
        }
    });
    
    //gvari
    $(document).on("blur", "input[name=lastname]", function(){
        p = $(this).prop("name");
        q = $(this).val();
        if (checkIt(p, q)) {
            $(this).parent().children("span").attr('class', 'success').html('<img src="icons/yes.png" />');
            $(this).parent().children("input").css('border', '1px solid #35babf');
            a2=1;
        } else {
            $(this).parent().children("span").attr('class', 'error').html('<img src="icons/no.png" />');
            $(this).parent().children("input").css('border', '1px solid red');
            a2=0;
        }
    });
    
    //telefoni
    $(document).on("blur", "input[name=phone]", function(){
        p = $(this).prop("name");
        q = $(this).val();
        if (checkIt(p, q)) {
            $(this).parent().children("span").attr('class', 'succes').html('<img src="icons/yes.png" />');
            $(this).parent().children("input").css('border', '1px solid #35babf');
            a3=1;
        } else {
            $(this).parent().children("span").attr('class', 'error').html('<img src="icons/no.png" />');
            $(this).parent().children("input").css('border', '1px solid red');
            a3=0;
        }
    });
    
    //meili
    $(document).on("blur", "input[name=mail]", function(){
        p = $(this).prop("name");
        q = $(this).val();
        if (checkIt(p, q)) {
            $(this).parent().children("span").attr('class', 'succes').html('<img src="icons/yes.png" />');
            $(this).parent().children("input").css('border', '1px solid #35babf');
            a4=1;
        } else {
            $(this).parent().children("span").attr('class', 'error').html('<img src="icons/no.png" />');
            $(this).parent().children("input").css('border', '1px solid red');
            a4=0;
        }
    });
    
    //misamarti
    $(document).on("blur", "input[name=address]", function(){
        p = $(this).prop("name");
        q = $(this).val();
        if (checkIt(p, q)) {
            $(this).parent().children("span").html('<img src="icons/yes.png" />');
            $(this).parent().children("input").css('border', '1px solid #35babf');
            a5=1;
        } else {
            $(this).parent().children("span").html('<img src="icons/no.png" />');
            $(this).parent().children("input").css('border', '1px solid red');
            a5=0;
        }
    });
});
