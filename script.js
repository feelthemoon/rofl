const btn = document.getElementById("no");
const btnYes = document.getElementById("yes");
btn.addEventListener("mouseover", () => {
  btn.style.left = `${Math.floor(Math.random() * (300 + 100) - 100)}%`;
  btn.style.top = `${Math.floor(Math.random() * (300 + 100) - 100)}%`;
});

btnYes.addEventListener("click", () => {
  alert("Поздравляем вы даун");
});
