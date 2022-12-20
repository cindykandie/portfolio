let img = document.getElementById('navbar');
let menu = document.querySelector('.desktop-nav');
let specs = document.querySelectorAll(".specs")


function toggleNav() {
  if (img.src.match('assets/menu.png')) {
    img.src = 'assets/closing-icon.svg';
    menu.classList.toggle('active');
  } else {
    img.src = 'assets/menu.png';
    menu.classList.toggle('active');
  }
}
function closeMenu() {
  menu.classList.toggle("active")
  img.src = "assets/menu.png";
}
img.addEventListener('click', toggleNav);
  specs.forEach((element) => {
  element.addEventListener('click', closeMenu)
})

// Step1: Toggle menubar with the closing icon
// Step2: Style the moble menu
// Step3: Combine the events
