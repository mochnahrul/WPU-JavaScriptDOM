// DOM Traversal Method:
// - parentNode -> Node
// - parentElement -> Element
// - nextSibling -> Node
// - nextElementSibling -> Element
// - previousSibling -> Node
// - previousElementSibling -> Element

// Tidak menggunakan DOM Traversal
// const closes = document.querySelectorAll('.close');
// const cards = document.querySelectorAll('.card');

// for (let i = 0; i < cards.length; i++) {
//   closes[i].addEventListener('click', function() {
//     cards[i].remove();
//   });
// }

// Jika menggunakan DOM Traversal
const closes = document.querySelectorAll(".close");
closes.forEach(function (close) {
  close.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});

// const name = document.querySelector('.name');
// console.log(name.parentNode);
// console.log(name.nextSibling);
// console.log(name.nextElementSibling);
// console.log(name.previousSibling);
// console.log(name.previousElementSibling);
