$(document).ready(function () {
    $("#save").click(function () {
        var name = $("#universityName").val();
        var ph = $("#phoneNumber").val();
        var address = $("#address").val();
        var nonNumeric = new RegExp('[^0-9]+$')
        var phoneRegex = new RegExp('^[0-9]{10}$');
                      
        //Required
        if(name.length == "")
        {
            $("#universityNameHelp").text("Please enter University name !");
            $("#universityName").focus();
            return false;
        }

        //Non Numeric charecters accepeted for University Name 
        if(!nonNumeric.test(name))
        {
            $("#universityNameHelp").text("Please enter charecters for University name !");
            $("#universityName").focus();
            return false;
        }

        //Required
        if(address.length == "")
        {
            $("#addressHelp").text("Please enter Address !");
            $("#address").focus();
            return false;
        }

        //Required
        if(ph.length == "")
        {
            $("#phoneNumberHelp").text("Please enter Phone number !");
            $("#phoneNumber").focus();
            return false;
        }

        if(!phoneRegex.test(ph))
        {
            $("#phoneNumberHelp").text("Please enter a 10 digit Phone number !");
            $("#phoneNumber").focus();
            return false;
        }

    })
});