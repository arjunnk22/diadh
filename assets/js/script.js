
const ham = document.getElementById('ham');
const closebtn = document.getElementById('closebtn');
const nav = document.getElementById('navbar');

if(ham) {
    ham.addEventListener('click', () => {
        nav.classList.add('left-0');
        closebtn.classList.add('left-0');
    });
    
}

if(closebtn) {
    closebtn.addEventListener('click', () => {
        nav.classList.remove('left-0');
        closebtn.classList.remove('left-0');
    });
    
}


// window.onscroll = function() {stickyHeader()};
// var header = document.getElementById("header");
// var sticky = header.offsetTop;
// function stickyHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("fixed");
//     header.classList.add("top-0");
//   } else {
//     header.classList.remove("fixed");
//     header.classList.remove("top-0");
//   }
// }


var nowactive = false;


const pt1 = document.getElementById('producttab-1');

const pt2 = document.getElementById('producttab-2');

const next = document.getElementById('btnnext');
const prev = document.getElementById('btnprev');


if(!nowactive) {
  pt2.classList
}