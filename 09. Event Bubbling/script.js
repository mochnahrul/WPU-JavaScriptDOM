// Event Bubbling -> Untuk menghentikan bubbling
// stopPropagation()

const closes = document.querySelectorAll(".close");
closes.forEach(function (close) {
  close.addEventListener("click", function (e) {
    e.target.parentElement.remove();
    e.stopPropagation();
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    alert("Okay");
  });
});

// const container = document.querySelector('.container');
// container.addEventListener('click', function(e) {
//   if (e.target.className == 'close') e.target.parentElement.remove();
// });
