//Get the button
var button = document.getElementById("scroll-up-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {showScrollToTop()};

function showScrollToTop() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.getElementById("scroll-up-button").classList.add("scroll-button-display");
    document.getElementById("scroll-up-button").classList.remove("scroll-button-hide");
  } else {
    document.getElementById("scroll-up-button").classList.add("scroll-button-hide");
    document.getElementById("scroll-up-button").classList.remove("scroll-button-display");
  }

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementsByClassName("site-title")[0].classList.add("site-title-small");
    document.getElementsByClassName("site-title-small")[0].classList.remove("site-title");

    document.getElementsByClassName("site-header")[0].classList.add("site-header-small");
    document.getElementsByClassName("site-header-small")[0].classList.remove("site-header");

    document.getElementsByClassName("site-nav-normal")[0].classList.add("site-nav-small");
    document.getElementsByClassName("site-nav-small")[0].classList.remove("site-nav-normal");

    document.getElementsByClassName("home-intro")[0].classList.add("home-intro-scroll");
    document.getElementsByClassName("home-intro-scroll")[0].classList.remove("home-intro");


  } else {
    document.getElementsByClassName("site-title-small")[0].classList.add("site-title");
    document.getElementsByClassName("site-title")[0].classList.remove("site-title-small");

    document.getElementsByClassName("site-header-small")[0].classList.add("site-header");
    document.getElementsByClassName("site-header")[0].classList.remove("site-header-small");
    
    document.getElementsByClassName("site-nav-small")[0].classList.add("site-nav-normal");
    document.getElementsByClassName("site-nav-normal")[0].classList.remove("site-nav-small");

    document.getElementsByClassName("home-intro-scroll")[0].classList.add("home-intro");
    document.getElementsByClassName("home-intro")[0].classList.remove("home-intro-scroll");


  }


}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    currentYOffset = self.pageYOffset;
    initYOffset = currentYOffset;
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

  
    var intervalId = setInterval(function(){
    currentYOffset -= initYOffset*0.05; 
    document.body.scrollTop = currentYOffset ;
    document.documentElement.scrollTop = currentYOffset;
  
      if(self.pageYOffset == 0){
        clearInterval(intervalId);
      }
    }, height/1000);
  }
