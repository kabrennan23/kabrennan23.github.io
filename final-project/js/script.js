$("#main-button").click(handleClickMain) 

function handleClickMain() {
  $("#main-div").show()
  $("#maindiv-text").show()
  $("#bio-div").hide()
  $("#biodiv-text").hide()
  $("#work-div").hide()
  $("#workdiv-text").hide()
  $("#skills-div").hide()
  $("#blog-div").hide()
  $("#blogdiv-text").hide()
  $("#contact-div").hide()
}

$("#bio-button").click(handleClickBio) 

function handleClickBio() {
  $("#bio-div").show()
  $("#biodiv-text").show()
  $("#main-div").hide()
  $("#maindiv-text").hide()
  $("#work-div").hide()
  $("#workdiv-text").hide()
  $("#skills-div").hide()
  $("#blog-div").hide()
  $("#blogdiv-text").hide()
  $("#contact-div").hide()
}

$("#work-button").click(handleClickWork) 

function handleClickWork() {
  $("#work-div").show()
  $("#workdiv-text").show()
  $("#main-div").hide()
  $("#maindiv-text").hide()
  $("#bio-div").hide()
  $("#biodiv-text").hide()
  $("#skills-div").hide()
  $("#blog-div").hide()
  $("#blogdiv-text").hide()
  $("#contact-div").hide()
}

$("#skills-button").click(handleClickSkills) 

function handleClickSkills() {
  $("#skills-div").show()
  $("#main-div").hide()
  $("#maindiv-text").hide()
  $("#bio-div").hide()
  $("#biodiv-text").hide()
  $("#work-div").hide()
  $("#workdiv-text").hide()
  $("#blog-div").hide()
  $("#blogdiv-text").hide()
  $("#contact-div").hide()
}

$("#blog-button").click(handleClickBlog) 

function handleClickBlog() {
  $("#blog-div").show()
  $("#blogdiv-text").show()
  $("#main-div").hide()
  $("#maindiv-text").hide()
  $("#bio-div").hide()
  $("#biodiv-text").hide()
  $("#work-div").hide()
  $("#workdiv-text").hide()
  $("#skills-div").hide()
  $("#contact-div").hide()
}

$("#contact-button").click(handleClickContact) 

function handleClickContact() {
  $("#contact-div").show()
  $("#main-div").hide()
  $("#maindiv-text").hide()
  $("#bio-div").hide()
  $("#biodiv-text").hide()
  $("#work-div").hide()
  $("#workdiv-text").hide()
  $("#skills-div").hide()
  $("#blog-div").hide()
  $("#blogdiv-text").hide()
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}