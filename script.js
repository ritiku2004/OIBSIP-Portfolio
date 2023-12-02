var typed = new Typed('.text', {
    strings: ['Programmer', 'Web Devloper'],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
    
  });

let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav'); 

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  nav.classList.toggle('active');
}
window.onscroll = () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>100);
  menuIcon.classList.remove('bx-x');
  nav.classList.remove('active');
}

