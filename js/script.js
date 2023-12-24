// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika huber di click
document.querySelector("#hamburger-menu").onclick = function () {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan bar

const hamburger = document
  .querySelector("#hamburger-menu")
  .document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
