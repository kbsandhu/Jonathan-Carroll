  //Section 1 ------------  
  //Declare an array of images
    var myImagesArray = ["images/Humber1.jpg","images/Basketball.jpg","images/Victory.jpg"];

    // Section 2 -------------------------------------------------
    //Make an automatic slide to display the images
    var ImageNumber = 0;
    var difference = myImagesArray.length -1;

    var delay = 3000; //milliseconds    1sec=1000milliseconds

    setInterval("ChangeImages(-1)", delay);
    //-1 to show the slide backwards
    //1 to show the slide forwards

    function ChangeImages(direction)
    {//begin function
        if(document.images)
        {//begin outer if
            ImageNumber = ImageNumber + direction;

            if(ImageNumber > difference)
            {//begin inner first if
                ImageNumber = 0;
            }//end inner first if

            if(ImageNumber < 0)
            {//begin inner second if
                ImageNumber = difference;
            }//end inner second if
            //document.slideshow.src = myImagesArray[ImageNumber];
            document.getElementById('slideshow').src = myImagesArray[ImageNumber];

        }//end outer if

    }//end function
    
            /* When the user clicks on the button, 
            toggle between hiding and showing the dropdown content */
            function myFunction() {
                document.getElementById("myDropdown").classList.toggle("show");
            }

            // Close the dropdown if the user clicks outside of it
            window.onclick = function(e) {
              if (!e.target.matches('.dropbtn')) {
                var myDropdown = document.getElementById("myDropdown");
                  if (myDropdown.classList.contains('show')) {
                    myDropdown.classList.remove('show');
                  }
              }
            }
            
//Slideshow manual----------------------------------------------------------------------------------------------------------------            
function openModal() 
{
  document.getElementById('myModal').style.display = "block";
}

function closeModal() 
{
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) 
  {
      slideIndex = 1;
  }
  if (n < 1) 
  {
      slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
