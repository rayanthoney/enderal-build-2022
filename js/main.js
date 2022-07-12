var wrapper = document.querySelector(".wrapper");
var nav = document.querySelector(".nav");

var offset = wrapper.offsetHeight - nav.offsetHeight;

window.onscroll = function () {
  if (window.pageYOffset > offset) {
    nav.classList.remove("bottom-nav");
    nav.classList.add("top-nav");
  } else {
    nav.classList.add("bottom-nav");
    nav.classList.remove("top-nav");
  }
};
