// NAVMENU OPEN & CLOSE
const openMenu = document.getElementById("open-menu-button");
const closeMenu = document.getElementById("close-menu-button");
const menu = document.getElementById("navUl");
// const lii = document.querySelectorAll("li");

openMenu.addEventListener("click", () => {
  menu.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  //   menu.style.width = "100%";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

const btn = document.getElementById("btnn");
const basic = document.getElementById("basic");
const pro = document.getElementById("pro");
const bm = document.getElementById("bm");
const ba = document.getElementById("ba");

bm.classList.add("bold");
btn.addEventListener("click", () => {
  //   console.log("fgjhk");
  if (basic.innerHTML == "$7.95/Mo" || pro.innerHTML == "$15.6/Mo") {
    basic.innerHTML = "$89.99/An";
    pro.innerHTML = "$170.99/An";

    bm.classList.remove("bold");
    ba.classList.add("bold");
  } else {
    basic.innerHTML = "$7.95/Mo";
    pro.innerHTML = "$15.6/Mo";
    bm.classList.add("bold");
    ba.classList.remove("bold");
  }
});
