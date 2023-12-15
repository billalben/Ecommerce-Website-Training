const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.querySelector("#navbar.links");

if (bar) {
  bar.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the document
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Add event listener to close the navbar when clicking outside it
document.addEventListener("click", (event) => {
  const clickedInsideNav = event.target.closest("#navbar.links");
  if (!clickedInsideNav) {
    nav.classList.remove("active");
  }
});

