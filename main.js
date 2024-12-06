const navbarMenu = document.querySelector(".header__nav .header__menu");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".header__link");

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click", () => {
  navbarMenu.classList.remove("show-menu");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
  });
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});