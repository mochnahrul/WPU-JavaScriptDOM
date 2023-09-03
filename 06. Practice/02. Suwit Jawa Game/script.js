// Comp Selection
function getCompSelection() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// Game Rules
function getResult(comp, player) {
  if (player == comp) return "<h3>DRAW!</h3>";
  if (player == "gajah") return comp == "orang" ? "<h3>WIN!</h3>" : "<h3>LOSE!</h3>";
  if (player == "semut") return comp == "gajah" ? "<h3>WIN!</h3>" : "<h3>LOSE!</h3>";
  if (player == "orang") return comp == "semut" ? "<h3>WIN!</h3>" : "<h3>LOSE!</h3>";
}

// Spin Images
function spinImg() {
  const imgComp = document.querySelector(".img-comp");
  const img = ["gajah", "semut", "orang"];
  let i = 0;
  const startTime = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) return clearInterval;
    imgComp.setAttribute("src", "image/" + img[i++] + ".png");
    if (i == img.length) i = 0;
  }, 100);
}

// Player Selection
const selectImg = document.querySelectorAll("li img");
selectImg.forEach(function (select) {
  select.addEventListener("click", function () {
    const compSelection = getCompSelection();
    const playerSelection = select.className;
    const result = getResult(compSelection, playerSelection);

    spinImg();
    setTimeout(function () {
      const imgComp = document.querySelector(".img-comp");
      const info = document.querySelector(".info");

      imgComp.setAttribute("src", "image/" + compSelection + ".png");
      info.innerHTML = result;
    }, 1000);
  });
});
