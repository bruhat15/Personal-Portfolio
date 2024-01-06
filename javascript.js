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
};

function subscribe() {
  alert("Your email is registered");
  document.write(document.getElementById("Full-name").value);
  var userInput = document.getElementById("Full-name").value;

  var messageElement = document.getElementById("message");

  messageElement.innerHTML =
    userInput + "You will get a Notification message of the news : ";
};







