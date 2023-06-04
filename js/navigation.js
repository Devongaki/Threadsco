const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-menu");

// Function to toggle the visibility of the menu

function toggleMenu() {
  navMenu.classList.toggle("active");
}

// Function to handle menu icon click

function handleMenuClick() {
  toggleMenu();
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
}

// Function to handle close icon click
function handleCloseClick() {
  toggleMenu();
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
}

menuIcon.addEventListener("click", handleMenuClick);
closeIcon.addEventListener("click", handleCloseClick);
