function hamburgerNav() {
  var hamburgerMenu = document.querySelector("nav");
  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "block";
  }
}

//Icons

topIcon = document.querySelector(".fa-caret-square-up");
shareIcon = document.querySelector(".fa-share-alt-square");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topIcon.style.display = "block";
    shareIcon.style.display = "block";
  } else {
    topIcon.style.display = "none";
    shareIcon.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
