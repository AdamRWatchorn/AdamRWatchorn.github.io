window.onscroll = function() {stick()};

var header = document.getElementById("toStick");
var sticky = header.offsetTop;
var h1head = document.getElementById("stickHead");
var navhead = document.getElementById("stickNav");
var clicked = false;
var moved = false;

function stick(){

   if (window.pageYOffset > sticky) {

      document.getElementById("filler").style.height = "50vh";
      document.getElementById("intro").style.height = "50vh";
      h1head.classList.add("opaque");
      navhead.classList.add("opaque");
      moved = true;
   } else {

      moved = false;

      if (clicked) {
         return;
      } else {
         h1head.classList.remove("opaque");
         navhead.classList.remove("opaque");
      }
   }		
}

function mobileFix() {

   if (!clicked) {
      h1head.classList.add("opaque");
      navhead.classList.add("opaque");
      clicked = true;
   } else if (clicked && !moved) {
      h1head.classList.remove("opaque");
      navhead.classList.remove("opaque");
      clicked = false;
   } else {
      clicked = false;
   }
   
}