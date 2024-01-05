let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx bx-cross");
  navbar.classList.toggle("active");
};

alert("Welcome to our website");
{
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
}

function subscribe() {
  alert("Your email is registered");
  document.write(document.getElementById("Full-name").value);
  var userInput = document.getElementById("Full-name").value;

  var messageElement = document.getElementById("message");

  messageElement.innerHTML =
    userInput + "You will get a Notification message of the news : ";
}

// typed javascripet 
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

ScrolReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay:200
});

ScrolReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrolReveal().reveal('.home-content, .heading',{origin: 'bottom'});
// typed javascrit 
{/* <script src="https://cdn.jsdlivr.net/npm/typed.js@2.0.12"></script> */}
{
<script src="https://cdn.jsdlivr.net/npm/typed.js@2.0.12"></script>;
const typed = new Typed('multiple-text',{
  strings: ['Frontend Developer','Youtuber','Photographer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
}






