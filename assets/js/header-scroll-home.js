window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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