console.log("JS loaded");

const loadMoreBtn = document.getElementById("loadMoreBtn");
const loader = document.getElementById("loader");
const moreProducts = document.getElementById("moreProducts");

loadMoreBtn.addEventListener("click", () => {
  loadMoreBtn.style.display = "none";
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    moreProducts.classList.add("show"); 
    loadMoreBtn.style.display = "inline-block";
  }, 2000);
});

// pasword show or not click finction/

const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    togglePassword.classList.toggle("active");
  });

