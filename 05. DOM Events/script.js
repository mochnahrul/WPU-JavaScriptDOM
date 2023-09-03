// Events pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM

// Kejadian yang dilakukan oleh User:
// - Mouse event
// - Keyboard event
// - dll

// Kejadian yang dilakukan secara otomatis oleh API:
// - Animasi selesai dijalankan
// - Halaman selesai di load
// - dll

// Cara menjalankan event:
// 1. Event Handler: Inline HTML Attribute, Element Method
// 2. addEventListener()

// Inline HTML Attribute -> Jangan pakai ini
// const paragraf1 = document.querySelector(".p1");
// function ubahWarna() {
//   paragraf1.style.backgroundColor = "lightblue";
// };

// Element Method -> Jika memberikan lebih dari satu perubahan pada sebuah event, perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya
// const paragraf1 = document.querySelector(".p1");
// function ubahWarna() {
//   paragraf1.style.backgroundColor = "lightblue";
// };
// paragraf1.onclick = ubahWarna;

// addEventListener() -> Jika memberikan lebih dari satu perubahan pada sebuah event, perubahan yang terakhir dilakukan tidak akan menimpa perubahan sebelumnya
const paragraf4 = document.querySelector(".p4");
paragraf4.addEventListener("click", function () {
  const ul = document.querySelector("ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Item Baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});
