var slideIndex = 0;

//Run automatic slideshow
function showSlides() {
    console.log("Test1");
    var i;
    var slides = document.getElementsByClassName("myImages").innerHTML;
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds

    console.log("Test2");
}

console.log("Test3");

// Dot image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }