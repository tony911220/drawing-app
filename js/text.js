// text btn
let add_input_box = null;

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
