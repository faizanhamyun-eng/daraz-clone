console.log("JS loaded");


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quantity-box").forEach(box => {
    const minusBtn = box.querySelector(".quantity-minus");
    const plusBtn = box.querySelector(".quantity-plus");
    const input = box.querySelector(".quantity-input");

    minusBtn.addEventListener("click", () => {
      let value = parseInt(input.value) || 1;
      if (value > 1) {   
        input.value = value - 1;
      }
    });

    plusBtn.addEventListener("click", () => {
      let value = parseInt(input.value) || 1;
      if (value < 3) {   
        input.value = value + 1;
      }
    });
  });
});
