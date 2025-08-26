const loadMoreBtn = document.getElementById("loadMoreBtn");
const loader = document.getElementById("loader");
const moreProducts = document.getElementById("moreProducts");

loadMoreBtn.addEventListener("click", () => {
  // Button hide sirf loader ke waqt
  loadMoreBtn.style.display = "none";
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    moreProducts.classList.add("show"); 

    // Button wapas visible ho (permanently)
    loadMoreBtn.style.display = "inline-block";
  }, 2000);
});
