const toggleBar = document.querySelector(".toggle-bar");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-links");

// Toggle menu
toggleBar.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Dynamic footer year
const yearEl = document.querySelector("#year");
yearEl.innerHTML = new Date().getFullYear();
