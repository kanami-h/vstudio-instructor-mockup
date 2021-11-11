// Tab
const classTab = document.querySelector("#classes-tab");
const videoTab = document.querySelector("#videos-tab");
const programTab = document.querySelector("#programs-tab");
const membershipTab = document.querySelector("#membership-tab");

classTab.addEventListener("click", (e) => {
  e.preventDefault();
  classEl.classList.add("show");
});

videoTab.addEventListener("click", (e) => {
  e.preventDefault();
  videoEl.classList.add("show");
});

programTab.addEventListener("click", (e) => {
  e.preventDefault();
  programEl.classList.add("show");
});

membershipTab.addEventListener("click", (e) => {
  e.preventDefault();
  membershipEl.classList.add("show");
});

// Cards
const classEl = document.querySelector("#nav-classes");
const videoEl = document.querySelector("#nav-videos");
const programEl = document.querySelector("#nav-programs");
const membershipEl = document.querySelector("#nav-membership");

// const heartEl = document.querySelectorAll(".bi-heart-fill");

// heartEl.forEach((heart) => {
//   heart.addEventListener("click", (e) => {
//     const clickedItem = e.target;
//     if ((clickedItem.style.color = "#bd81af")) {
//       clickedItem.style.color = "#8d8f90";
//     } else {
//       clickedItem.style.color = "#bd81af";
//     }
//   });
// });
