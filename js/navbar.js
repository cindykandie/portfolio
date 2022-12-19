let img = document.getElementById("navbar")
img.addEventListener('click', toggleNav)

function toggleNav() {

    if (img.src.match("assets/menu.png") ) {
      img.src = "assets/closing-icon.svg";
    } 
    else{
      img.src = "assets/menu.png";
    }
}






  // Step1: Toggle menubar with the closing icon
  // Step2: Style the moble menu
  // Step3: Combine the events