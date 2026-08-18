const colorBox = document.getElementById("colorBox");
const colorInput = document.getElementById("colorInput");
const resetBtn = document.getElementById("resetBtn");

const defaultColor = "#4e73df";

colorInput.addEventListener("input", function () {
  colorBox.style.backgroundColor = colorInput.value;
});

resetBtn.addEventListener("click", function () {
  colorBox.style.backgroundColor = defaultColor;
  colorInput.value = defaultColor;
});
