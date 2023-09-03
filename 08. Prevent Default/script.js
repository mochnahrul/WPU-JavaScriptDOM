// Prevent Default -> Untuk menghentikan aksi default
// preventDefault()

const closes = document.querySelectorAll(".close");
closes.forEach(function (close) {
  close.addEventListener("click", function (e) {
    e.target.parentElement.remove();
    e.preventDefault();
  });
});
