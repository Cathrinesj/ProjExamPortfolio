function hamburgerNav() {
  var hamburgerMenu = document.querySelector("nav");
  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "block";
  }
}
