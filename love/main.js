var noBtn = document.querySelector(".no");
var boxElement = document.querySelector(".box");
noBtn.onmouseover = function () {
  var x = Math.floor(Math.random() * 1000);
  var y = Math.floor(Math.random() * 500);
  Object.assign(boxElement.style, {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
  });
};
var box2Element = document.querySelector(".box2");
var yesBtn = document.querySelector(".yes");
yesBtn.onclick = function () {
  Object.assign(boxElement.style, {
    display: "none",
  });
  Object.assign(box2Element.style, {
    display: "block",
  });
};
setInterval(function () {
  document.querySelector(".title").classList.toggle("redText");
  document.querySelector(".yes").classList.toggle("redText");
  document.querySelector(".no").classList.toggle("redText");
}, 500);
