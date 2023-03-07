const download = document.getElementById("download");
const canvas = document.getContext("2d");
function downloadImg() {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");

  link.download = "yourCanvas.jpeg";

  link.click();
}
download.addEventListener("click", () => {
  downloadImg();
});
