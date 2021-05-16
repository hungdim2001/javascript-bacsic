var btn = document.querySelector("img");
var spin = 1000 + Math.floor(Math.random() * 1000);
function rotatse() {
  var randomSecond = 1 + Math.floor(Math.random() * 2);
  console.log(randomSecond);
  spin += 1000 + Math.floor(Math.random() * 1000);
  console.log(spin);
  do {
      spin++;
  } while (spin % 360 !== 0);
  console.log(spin);
  btn.style.transform = "rotateZ(" + spin + "deg)";
  btn.style.transition = `${randomSecond}s`;
}
btn.addEventListener("click", rotatse);


