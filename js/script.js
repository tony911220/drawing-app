const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeSel = document.getElementById("size");
const colorSel = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");
const download = document.getElementById("download");
const text = document.getElementById("text");

const ctx = canvas.getContext("2d");

const brush = 0;
const eraser = 1;
let color = "black";
let pen = 0; // 0 -> brush, 1 -> eraser
let size = 10;

// increase and decrease btn
increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) size = 50;
  sizeSel.innerText = size;
});
decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size <= 5) size = 5;
  sizeSel.innerText = size;
});
