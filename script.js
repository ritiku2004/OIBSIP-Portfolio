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
function sendMail () {
  let top = document.getElementById("nm").value;
  let bdy = document.getElementById("mail").value+" "+document.getElementById("mob").value+" "+document.getElementById("data").value;
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "visiters2004@gmail.com",
  Password : "D5604DBE824B99BFA0FB06FCC50BCE14C88C",
  To : "ritikupadhyay838@gmail.com",
  From : "visiters2004@gmail.com",
  Subject : top,
  Body : bdy
}).then(
message => alert("Error in seding message. Go to "Let's talk" for connecting.)
);
}
