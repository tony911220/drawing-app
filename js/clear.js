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
