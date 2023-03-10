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
let clearInfo = document.querySelector("#clearInfo");
let no = document.querySelector("#no");
let yes = document.querySelector("#yes");
let X = document.querySelector("#X");
clearBtn.addEventListener("click", () => {
  let dia = document.getElementById("clearInfo");
  dia.style.display = "flex";
  yes.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dia.style.display = "none";
  });
  no.addEventListener("click", () => {
    dia.style.display = "none";
  });
  X.addEventListener("click", () => {
    dia.style.display = "none";
  });
});

// eraser btn
eraserBtn.addEventListener("click", () => {
  if (pen == 1) pen = 0;
  else pen = 1;

  if (pen == 1) {
    document.getElementById("canvas").style.cursor = "pointer";
    eraserBtn.style.background = "#47484b";
  } else {
    document.getElementById("canvas").style.cursor = "auto";
    eraserBtn.style.background = "#ffffff";
  }
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

let add_input_box = null;
// text btn
text.addEventListener("click", () => {
  canvas.addEventListener(
    "click",
    (add_input_box = (e) => {
      let txt = document.createElement("div"); // create a new tag
      let txtX = e.offsetX; // x for canvas drawing
      let txtY = e.offsetY; // y for canvas drawing

      txt.setAttribute("id", "txt");
      txt.style =
        "position: absolute; top: " +
        e.clientY +
        "px; left: " +
        e.clientX +
        "px; background-color: white; ";
      txt.innerHTML =
        '<input type="text" id="txt_input" style="font-size:' +
        size +
        'px; "/>';
      document.getElementById("bdy").appendChild(txt);

      document.getElementById("txt_input").focus(); // focus on txt_input
      document.getElementById("txt_input").addEventListener("blur", () => {
        let txtContent = document.getElementById("txt_input").value;
        document
          .getElementById("bdy")
          .removeChild(document.getElementById("txt")); // remove txt

        // draw txt_input on canvas
        ctx.beginPath();
        ctx.font = size + "px georgia";
        ctx.fillStyle = color;
        ctx.fillText(txtContent, txtX, txtY);
        ctx.stroke();
        // remove the eventListener
        canvas.removeEventListener("click", add_input_box);
      });
    })
  );
});
