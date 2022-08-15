
const ham = document.getElementById('ham');
const closebtn = document.getElementById('closebtn');
const nav = document.getElementById('navbar');

if(ham) {
    ham.addEventListener('click', () => {
        nav.classList.add('active');
        closebtn.classList.add('active');
    });
    
}

if(closebtn) {
    closebtn.addEventListener('click', () => {
        nav.classList.remove('active');
        closebtn.classList.remove('active');
    });
    
}


window.onscroll = function() {stickyHeader()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
    header.classList.add("top-0");
  } else {
    header.classList.remove("fixed");
    header.classList.remove("top-0");
  }
}