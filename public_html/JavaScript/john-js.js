var myImagesArray = ["images/a1.jpg", "images/a2.jpg", "images/a3.jpg", "images/a4.jpg", "images/a5.jpg", "images/a6.jpg", "images/a7.jpg", "images/a8.jpg", "images/a9.jpg"];

//make an automatic slide to display the images
var ImageNumber = 0;
var difference = myImagesArray.length - 1;

var delay = 2000;

setInterval("ChangeImages(-1)", delay);
//-1 to show the slide backwards
//1 to show the slide forwards

function ChangeImages(direction)
{//begin function
    if (document.images)
    {//begin outer if
        ImageNumber = ImageNumber + direction;

        if (ImageNumber > difference)
        {//begin inner first if
            ImageNumber = 0;
        }//end inner first if

        if (ImageNumber < 0)
        {//begin inner second if
            ImageNumber = difference;
        }//end inner second if
        //document.slideshow.src = myImagesArray[ImageNumber];
        document.getElementById('myimage').src = myImagesArray[ImageNumber];

    }//end outer if

}//end function


function validateForm() {
    var x = document.forms["MyForm"]["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");


    }
    var x = document.forms["MyForm"]["lastname"].value;
    if (x == "") {
        alert("Name must be filled out");


    }
    var x = document.forms["MyForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");


    }
    var x = document.forms["MyForm"]["title"].value;
    if (x == "") {
        alert("Title must be filled out");


    }
    var x = document.forms["MyForm"]["list"].value;
    if (x == "") {
        alert("List must be filled out");


    }
    var x = document.forms["MyForm"]["Plist"].value;
    if (x == "") {
        alert("Program List must be filled out");


    }
    var x = document.forms["MyForm"]["address"].value;
    if (x == "") {
        alert("Address must be filled out");


    }
    var x = document.forms["MyForm"]["postal"].value;
    if (x == "") {
        alert("Postal Code must be filled out");


    }
    var x = document.forms["MyForm"]["city"].value;
    if (x == "") {
        alert("City must be filled out");


    }
}