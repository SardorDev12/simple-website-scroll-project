// Elements
const toggle = document.querySelector(".toggle-bar");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-links");
const header = document.querySelector(".header");
const topLink = document.querySelector(".top-link");
const headerHeight = header.getBoundingClientRect().height;

// Toggle menu
toggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed header
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > headerHeight) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

// Top Link btn
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//Smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const headerHeight = header.getBoundingClientRect().height;
    const containerHeight = links.getBoundingClientRect().height;
    const fixedHeader = header.classList.contains("fixed-header");

    let position = element.offsetTop - headerHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// Dynamic footer year
const yearEl = document.querySelector("#year");
yearEl.innerHTML = new Date().getFullYear();
