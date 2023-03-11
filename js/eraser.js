// eraser btn
eraserBtn.addEventListener("click", () => {
  if (pen == brush) pen = eraser;
  else pen = brush;

  if (pen == eraser) {
    document.getElementById("canvas").style.cursor = "pointer";
    eraserBtn.style.background = "#47484b";
  } else if (pen == brush) {
    document.getElementById("canvas").style.cursor = "auto";
    eraserBtn.style.background = "#ffffff";
  }
});
