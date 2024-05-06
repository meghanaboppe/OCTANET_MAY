const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "100px",
  origin: "bottom",
  duration: 2000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
  delay:200,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  distance: "100px",
  origin: "right",
  delay: 500,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  distance: "100px",
  origin: "right",
  delay: 800,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,

  distance: "100px",
  origin: "right",
  delay: 1100,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  distance: "100px",
  origin: "right",
  delay: 1400,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 3000,
  distance: "100px",
  origin: "right",
  delay: 500,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 3000,
  distance: "100px",
  origin: "right",
  delay: 600,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 700,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 800,
  interval: 300,
});


