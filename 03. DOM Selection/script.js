// DOM Selection Method

// getElementById() -> Element
const judul = document.getElementById("judul");
judul.style.backgroundColor = "lightblue";
judul.innerHTML = "Mochamad Nahrul";

// getElementsByTagName() -> HTMLCollection
const paragrafA = document.getElementsByTagName("p");
// for (let i = 0; i < paragrafA.length; i++) {
//   paragrafA[i].style.backgroundColor = "lightblue";
// }
// Menggunakan method Array.from() untuk mengonversi HTMLCollection ke Array
Array.from(paragrafA).forEach(function (e) {
  e.style.backgroundColor = "lightblue";
});
// Jika ingin mengambil sebuah elemen gunakan index
paragrafA[1].style.backgroundColor = "lightgreen";

// getElementsByClassName() -> HTMLCollection
const paragrafB = document.getElementsByClassName("paragrafB");
for (let i = 0; i < paragrafB.length; i++) {
  paragrafB[i].style.backgroundColor = "salmon";
}

// querySelector() -> Element
const list2 = document.querySelector("#b li:nth-child(2)");
list2.style.backgroundColor = "lightgreen";

// querySelectorAll() -> NodeList
const listB = document.querySelectorAll("#b li");
listB[0].style.backgroundColor = "lightblue";

// Mengubah node root
const sectionB = document.getElementById("b");
const list3 = sectionB.querySelector("li:nth-child(3)");
list3.style.backgroundColor = "salmon";
