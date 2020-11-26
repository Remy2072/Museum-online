var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', cursorMovement);
function cursorMovement(e) {
    var cursorX = e.clientX;
    var cursorY = e.clientY;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    console.log(cursorX + "px");
}