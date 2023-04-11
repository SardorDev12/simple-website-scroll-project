// Elements
const toggle = document.querySelector(".toggle-bar");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-links");
const header = document.querySelector(".header");
const topLink = document.querySelector(".top-link");

// Toggle menu
toggle.addEventListener("click", () => {
  console.log("clicked");
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
  const headerHeight = header.getBoundingClientRect().height;

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
// Dynamic footer year
const yearEl = document.querySelector("#year");
yearEl.innerHTML = new Date().getFullYear();
