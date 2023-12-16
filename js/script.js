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

// ================= change image in product details
const mainImg = document.querySelector("#mainImg");
const smallImg = document.querySelectorAll(".small-img");

smallImg.forEach((small) => {
  small.addEventListener("click", (event) => {
    const img = event.target.src;
    mainImg.src = img;
  });
});

// go to the product page
const products = document.querySelectorAll(".product-container .pro");

products.forEach((product) => {
  product.addEventListener("click", () => {
    window.location.href = "product.html";
  });
});

const cartBtns = document.querySelectorAll(".pro-cart");

cartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
