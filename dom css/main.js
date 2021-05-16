var divElement = document.querySelector("div");
console.log(divElement.style);
Object.assign(divElement.style, {
  width: "200px",
  height: "100px",
  backgroundColor: "#000",
});