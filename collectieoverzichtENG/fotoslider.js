let fotonummer, fotobreedte, aantalfotos, fotoslider;
function setupFotoslider() {
  fotonummer = 0;
  fotobreedte = 578;

  fotoslider = document.getElementById("fotoslider");
  let volgendeKnop = document.getElementById("volgende-btn");
  let vorigeKnop = document.getElementById("vorige-btn");

  aantalfotos = fotoslider.children.length;
  console.log(aantalfotos);

  volgendeKnop.addEventListener("click", volgendeFoto);
  vorigeKnop.addEventListener("click", vorigeFoto);
}

function volgendeFoto() {
  fotonummer += 1;

  if (fotonummer === aantalfotos) {
    fotonummer = 0;
  }

  let afstandNaarLinks = -1 * (fotonummer * fotobreedte);
  fotoslider.style.left = afstandNaarLinks + "px";
}

function vorigeFoto() {
  fotonummer -= 1;

  if (fotonummer < 0) {
    fotonummer = aantalfotos - 1;
  }

  let afstandNaarLinks = -1 * (fotonummer * fotobreedte);
  fotoslider.style.left = afstandNaarLinks + "px";
}

document.addEventListener("DOMContentLoaded", setupFotoslider);
