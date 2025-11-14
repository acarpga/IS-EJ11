//eventos
const cielo2 = document.getElementById("cielo2");

var btnEstrella2 = document.getElementById("btnEstrella2");
btnEstrella2.addEventListener("click", () => {
  cielo2.innerHTML += "⭐";
});

const btnPlaneta = document.getElementById("btnPlaneta");
btnPlaneta.addEventListener("dblclick", () => {
  cielo2.innerHTML += "🌕";
});

const imputEmoji = document.getElementById("inputEmoji");

const btnAgregarEmoji = document.getElementById("btnAgregarEmoji");

btnAgregarEmoji.addEventListener("click", () => {
  var emoji = imputEmoji.value.trim();
  if (emoji) cielo2.innerHTML += emoji;
  imputEmoji.value = "";
});

inputEmoji.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cielo2.innerHTML = "";
});