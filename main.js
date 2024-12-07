const navbarMenu = document.querySelector(".header__nav .header__menu");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".header__link");
const showPopupBtn = document.querySelector(".book-now-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
let swiperCards = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1920: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

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