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

// draw on canvas
let size = 10;
let isPressed = false;
let pen = 0; // 0 -> brush, 1 -> eraser
let color = "black";
let x;
let y;
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  ctx.lineCap = "round"; // 線條兩端圓弧
  ctx.lineJoin = "round"; // 線條折角圓弧
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed == true) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawLine(x, y, x2, y2);
  }
});
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  if (pen == 0) ctx.strokeStyle = color;
  else ctx.strokeStyle = "#f5f5f5";
  ctx.lineWidth = size;
  ctx.lineCap = "round"; // 線條兩端圓弧
  ctx.lineJoin = "round"; // 線條折角圓弧
  x = x2;
  y = y2;
  ctx.stroke();
}

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

// clear btn
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// eraser btn
eraserBtn.addEventListener("click", () => {
  if (pen == 1) pen = 0;
  else pen = 1;

  if (pen == 1) document.getElementById("canvas").style.cursor = "pointer";
  else document.getElementById("canvas").style.cursor = "auto";
});

// color selector
colorSel.addEventListener("change", (e) => {
  color = e.target.value;
});
function change_cursor() {}

// download btn
function downloadImg() {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");

  link.download = "yourCanvas.jpeg";

  link.click();
}
download.addEventListener("click", () => {
  downloadImg();
});