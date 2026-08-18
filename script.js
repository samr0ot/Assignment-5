const colorBox = document.getElementById("colorBox");
const colorInput = document.getElementById("colorInput");
const resetBtn = document.getElementById("resetBtn");

const defaultColor = "#4e73df";

// change box color whenever the color input changes
colorInput.addEventListener("input", function () {
  colorBox.style.backgroundColor = colorInput.value;
});

// reset box back to the default color
resetBtn.addEventListener("click", function () {
  colorBox.style.backgroundColor = defaultColor;
  colorInput.value = defaultColor;
});
