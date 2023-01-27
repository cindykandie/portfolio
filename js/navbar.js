const img = document.getElementById('navbar');
const menu = document.querySelector('.desktop-nav');
const specs = document.querySelectorAll('.specs');

function toggleNav() {
  if (img.src.match('assets/menu.png')) {
    img.src = 'assets/icons/closing-icon.svg';
    menu.classList.toggle('active');
  } else {
    img.src = 'assets/icons/menu.png';
    menu.classList.toggle('active');
  }
}
function closeMenu() {
  menu.classList.toggle('active');
  img.src = 'assets/icons/menu.png';
}
img.addEventListener('click', toggleNav);
specs.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

// Step1: Toggle menubar with the closing icon
// Step2: Style the moble menu
// Step3: Combine the events
