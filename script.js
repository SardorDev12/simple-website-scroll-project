// Dynamic date - ✔
const date = document.getElementById("year");
date.innerText = new Date().getFullYear();

// Toggle menu
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-links");
const toggle = document.querySelector(".toggle-bar");
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
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
  const topLink = document.querySelector(".top-link");
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// Smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
const headerHeight = header.getBoundingClientRect().height;
scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop - headerHeight;
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
