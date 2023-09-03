// DOM Manipulation Method:
// 1. Manipulasi Elemen
// 2. Manipulasi Node

// Manipulasi Elemen:

// element.innerHTML -> Mengubah isi dari tag yang sudah diseleksi
const judul = document.getElementById("judul");
judul.innerHTML = "Mochamad Nahrul";

// element.style.<propertyCSS> -> Membuat style dari tag yang sudah diseleksi
const sectionA = document.getElementById("a");
const paragrafA = sectionA.querySelectorAll("p");
for (let i = 0; i < paragrafA.length; i++) {
  paragrafA[i].style.backgroundColor = "lightblue";
}

// element.setAttribute() -> Menimpa attribute
// element.getAttribute() -> Mengambil attribute
// element.removeAttribute() -> Mengilangkan attribute
const sectionB = document.getElementById("b");
const paragrafB = sectionB.querySelectorAll("p");
paragrafB[0].setAttribute("class", "p4");
console.log(paragrafB[1].getAttribute("class"));
paragrafB[2].removeAttribute("class");

// element.classList.add() -> Menambahkan class
// element.classList.remove() -> Menghapus class
// element.classList.toggle() -> Menambahkan toggle (seperti tombol)
// element.classList.item() -> Menampilkan nama class pada sebuah elemen
// element.classList.contains() -> Menanyakan nama class kepada javascript
// element.classList.replace() -> Mengganti class
const listB = sectionB.querySelectorAll("ul li");
for (let i = 0; i < listB.length; i++) {
  listB[i].classList.add("li" + (i + 1));
}

listB[0].classList.remove("li1");
for (let i = 0; i < listB.length; i++) {
  listB[i].classList.toggle("biru-muda");
}

console.log(listB[1].classList.item(1));
console.log(listB[1].classList.contains("hijau-muda"));
listB[2].classList.replace("biru-muda", "hijau-muda");

// Manipulasi Node:

// document.createElement() -> Membuat elemen baru
// document.createTextNode() -> Membuat isi text elemen
// node.appendChild() -> Menyimpan di akhir
// node.insertBefore() -> Menyimpan di sebelum
const heading = document.createElement("h2");
const isiHeading = document.createTextNode("Hello World");
heading.appendChild(isiHeading);
// sectionA.appendChild(heading);
sectionA.insertBefore(heading, paragrafA[0]);

// parentNode.removeChild() -> Menghapus elemen
sectionA.removeChild(paragrafA[2]);

// parentNode.replaceChild() -> Mengganti elemen
const heading1 = document.createElement("h3");
const isiHeading1 = document.createTextNode("Hello World");
heading1.appendChild(isiHeading1);
sectionA.replaceChild(heading1, paragrafA[0]);
