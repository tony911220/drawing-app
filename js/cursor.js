var pic = document.querySelector("img");
document.addEventListener("mousemove", function (e) {
  //1. mousemove 只要我们鼠标移动1px 就会触发这个事件
  //2.核心原理 每次鼠标移动，我们都会获得最新的鼠标坐标，把这个X和 Y坐标作为图片的top和left值 就可以移动图片
  var x = e.pageX;
  var y = e.pageY;
  //3. 千万不要忘记给我们left 和top 添加px 单位
  pic.style.left = x - 25 + "px";
  pic.style.top = y - 25 + "px";
});
