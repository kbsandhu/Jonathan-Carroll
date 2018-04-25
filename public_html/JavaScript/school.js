/*JAVASCRIPT FOR THE IMAGE SLIDER ON THE HOME PAGE BY KINDERBEER SINGH SANDHU*/
/*JAVASCRIPT FOR SLIDER FROM LINE 4 TO 28*/


var slider_content = document.getElementById('box');
//contain  images in array
var image = ['a', 'b', 'c', 'd', 'e'];
var i = image.length;
//function for next slide
function nextImage()
{
    if (i < image.length) {
        i = i + 1;
    } else {
        i = 1;
    }

    slider_content.innerHTML = "<img src=images/" + image[i - 1] + ".jpg>";
}
function prevImage()
{
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    slider_content.innerHTML = "<img src=images/" + image[i - 1] + ".jpg>";
}
/*JAVASCRIPT FOR THE MAP ON THE HOME PAGE BY KINDERBEER SINGH SANDHU*/
/*JAVASCRIPT FOR MAP FROM LINE 32 TO 42*/

function initMap() {
    var uluru = {lat: 43.728998, lng: -79.608217};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

/*JAVASCRIPT FOR THE DATEPICKER ON THE INQUIRY PAGE BY KINDERBEER SINGH SANDHU*/
/*JAVASCRIPT FOR DATEPICKER FROM LINE 47 TO */

$(function () {
    $("#datepicker").datepicker();
});

/*JAVASCRIPT FOR THE FORM VALIDATION THE INQUIRY PAGE BY KINDERBEER SINGH SANDHU*/
/*JAVASCRIPT FOR MAP FROM LINE 56 TO  254*/
/*DIFFERENT FUNCTIONS OF ALL VALIDATING INPUTS*/

var emailAddress1 = $("#email_address1").val();
function emailValidate1() {
    var emailAddress1 = $("#email_address1").val();



    // validate the first email address
    var emailpatr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (emailAddress1 === "") {
        var msg = $("#email_address1").next().text("Required !");
        $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});

    } else if (!emailpatr.test(emailAddress1)) {
        var invalid = $("#email_address1").next().text(" ✖ ");
        $(invalid).css({"background-color": "red", "color": "white", "border-radius": "20%"});

    } else {
        var correct = $("#email_address1").next().text(" ✔ ");
        $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
return true;
    }

}
var emailAddress2 = $("#email_address2").val();
function emailValidate2(){
 emailValidate1();
 var emailAddress1 = $("#email_address1").val();
     var emailAddress2 = $("#email_address2").val();
    // validate the second email address
    if (emailAddress2 === "") {
       var msg= $("#email_address2").next().text("Required !");
        $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});

    } else if (emailAddress1 !== emailAddress2) {
       var invalid =  $("#email_address2").next().text(" ✖ ");
       $(invalid).css({"background-color": "red", "color": "white", "border-radius": "20%"});

    }else if (emailAddress1 == emailAddress2) {
       var correct =  $("#email_address2").next().text(" ✔ ");
       $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
   }
    else {
        var correct=$("#email_address2").next().text(" ✔ ");
        $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
return true;
    }
} 

// validate the first name entry 
function firstname(){
    emailValidate2();
    if ($("#first_name").val() === "") {
        var msg= $("#first_name").next().text("Required !");
       $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});
    } else {
       var correct= $("#first_name").next().text(" ✔ ");
       $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
       return true;
    }
}
function lastname(){
    firstname();
    if ($("#last_name").val() == "") {
       var msg= $("#last_name").next().text("Required !");
        $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});
    } else {
       var correct=   $("#last_name").next().text(" ✔ ");
       $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
       return true;
    }
}
function checkDate(){
    lastname();
    if ($("#datepicker").val() == "") {
         var msg=$("#datepicker").next().text("Required !");
      $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});
    } else {
         var correct=$("#datepicker").next().text(" ✔ ");
                $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
                return true;

    }
}
function studentType(){
     lastname();
   if ($("#type").val() === "") {
       var msg= $("#type").next().text("Select One Option");
             $(msg).css({"background-color": "white", "color": "Red","border-radius": "20%"});

    }
    else{
        var correct=$("#type").next().text(" ✔ ");
                $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
                return true;
    }
}

function country() {
studentType();
    if ($("#countryId").val() ==="Select Country") {
       var msg= $("#countryId").next().text("Required !");
        $(msg).css({"background-color": "white", "color": "Red","border-radius": "20%"});
    } else {
      var correct=  $("#countryId").next().text(" ✔ ");
        $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
        return true;
    }

}
 
function street() {
  country();
    if ($("#street_address").val() ==="") {
       var msg= $("#street_address").next().text("Required");
        $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});
    } else {
      var correct=  $("#street_address").next().text(" ✔ ");
        $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
        return true;
    }

}

function state() {
  street();
    if ($("#stateId").val() ==="") {
       var msg= $("#stateId").next().text("Required");
        $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});
    } else {
      var correct=  $("#stateId").next().text(" ✔ ");
        $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
        return true;
    }

}

function city() {
  state();
    if ($("#cityId").val() ==="") {
       var msg= $("#cityId").next().text("Required");
        $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});
    } else {
      var correct=  $("#cityId").next().text(" ✔ ");
        $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
        return true;
    }

}

function pin() {
  city();
    if ($("#postal_code").val() ==="") {
       var msg= $("#postal_code").next().text("Required");
        $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});
    } else {
      var correct=  $("#postal_code").next().text(" ✔ ");
        $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
        return true;
    }

}

function phone() {
 pin();
 var phonenum = $("#student_number").val();
 var phoneptrn=/D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/;

    if ($("#student_number").val() ==="") {
       var msg= $("#student_number").next().text("Required");
        $(msg).css({"background-color": "white", "color": "Red", "border-radius": "20%"});
    }
    else if (!phoneptrn.test(phonenum)) {
        var invalid = $("#student_number").next().text(" ✖ ");
        $(invalid).css({"background-color": "red", "color": "white", "border-radius": "20%"});

    }
    else {
      var correct=  $("#student_number").next().text(" ✔ ");
        $(correct).css({"background-color": "green", "color": "white", "border-radius": "20%"});
        
        return true;
    }

}



function ifEmpty(){
    
    
    
    if(emailValidate1() && emailValidate2() && firstname() && lastname() && checkDate() && studentType() && country() && street() &&
        state() && city() && pin() && phone() ){
       
   }
    else{
        alert("Missing Required Data");
    }
}





