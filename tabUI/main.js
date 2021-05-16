const s = document.querySelector.bind(document);
const ss = document.querySelectorAll.bind(document);
const tabs = ss(".tab-item");
const panels = ss(".tab-pane");
const line = s(".tabs .line");
const tabActive = s(".tab-item.active");
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
tabs.forEach((item, index) => {
  const panel = panels[index];
  item.onclick = function () {
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    s(".tab-item.active").classList.remove("active");
    s(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    panel.classList.add("active");
  };
});
