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
function sendMail() {
    let top = document.getElementById("nm").value;
    let bdy ="<br/>Name - " + document.getElementById("nm").value + "<br/><br/>mail id - " + document.getElementById("mail").value + " " +"<br/><br/>Mobile number - " + document.getElementById("mob").value + " " + "<br/><br/>Message - " + document.getElementById("data").value +"<br/>";
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "visiters2004@gmail.com",
        Password: "88879B73FD61A3B63466670E6283B72D454C",
        To: 'ritikupadhyay838@gmail.com',
        From: 'ritikupadhyay838@gmail.com',
        Subject: top,
        Body: bdy
        }).then(
        message => alert("Message sent successfully.")
         );
     }
}
