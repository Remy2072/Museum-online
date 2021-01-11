/*===== CURSOR =====*/
var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", cursorMovement);
function cursorMovement(e) {
  var cursorX = e.clientX;
  var cursorY = e.clientY;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  console.log(cursorX + "px");
}
/*===== MENU BUTTON=====*/
var navMenu = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    navMenu.classList.add("zichtbaar");
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    navMenu.classList.remove("zichtbaar");
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
