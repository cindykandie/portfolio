let img = document.getElementById("navbar")
let menu = document.querySelector(".desktop-nav")

img.addEventListener('click', toggleNav)

function toggleNav() {
  function toggleMenu() {
    menu.style.left = 0;
    menu.style.right = 0;
  }
    if (img.src.match("assets/menu.png") ) {
      img.src = "assets/closing-icon.svg";
      toggleMenu() 
    } 
    else{
      img.src = "assets/menu.png";
    }
}



  // Step1: Toggle menubar with the closing icon
  // Step2: Style the moble menu
  // Step3: Combine the events