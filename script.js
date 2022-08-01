const prevBtn = document.querySelector(".carousel-prev-btn");
const nextBtn = document.querySelector(".carousel-next-btn");
const carousel = document.querySelector(".carousel");
const carouselBox = document.querySelector(".carousel-box");
const slides = document.querySelectorAll(".carousel-slide");

const toggleBtn = document.querySelector(".toggle-btn");
const navRibbon = document.querySelector(".nav-ribbon");

const navBtnList = document.querySelector('.nav-btn-list')

let direction;

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  direction = 1;
  carouselBox.style.justifyContent = "flex-start";
  slides.forEach((slide) => {
    carousel.style.transform = `translate(-34rem)`;
  });
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (direction === 1) {
    carousel.appendChild(carousel.firstElementChild);
    direction = -1;
  }
  carouselBox.style.justifyContent = "flex-end";
  slides.forEach((slide) => {
    carousel.style.transform = `translate(34rem)`;
  });
});

carousel.addEventListener("transitionend", () => {
  direction === 1
    ? carousel.appendChild(carousel.firstElementChild)
    : carousel.prepend(carousel.lastElementChild);
  carousel.style.transition = "none";
  carousel.style.transform = `translate(0)`;
  setTimeout(() => {
    carousel.style.transition = "all 800ms ease";
  });
});

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(navRibbon.children[2].classList[0] === 'nav-btns') {
    navRibbon.children[2].classList.remove('nav-btns', 'default-padding')
    navRibbon.children[2].classList.add('nav-btn-list')
  } else if(navRibbon.children[2].classList[0] === 'nav-btn-list') {
    navRibbon.children[2].classList.remove('nav-btn-list')
    navRibbon.children[2].classList.add('nav-btns', 'default-padding')
  } 
});

window.addEventListener('click', e => {
  if(!toggleBtn.contains(e.target)) {
    if(navRibbon.children[2].classList[0] === 'nav-btn-list') {
      navRibbon.children[2].classList.remove('nav-btn-list')
      navRibbon.children[2].classList.add('nav-btns', 'default-padding')
    }
  }
  return
})