const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const btnOpenNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnOpenNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
