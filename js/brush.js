// brush
let isPressed = false;
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
  if (pen == brush) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;

    ctx.lineWidth = size;
    ctx.lineCap = "round"; // 線條兩端圓弧
    ctx.lineJoin = "round"; // 線條折角圓弧
    ctx.stroke();
    x = x2;
    y = y2;
  } else if (pen == eraser) {
    ctx.lineCap = "round"; // 線條兩端圓弧
    ctx.lineJoin = "round"; // 線條折角圓弧
    ctx.clearRect(x1, y1, size, size);
    x = x2;
    y = y2;
  }
}
// color selector
colorSel.addEventListener("change", (e) => {
  color = e.target.value;
});
