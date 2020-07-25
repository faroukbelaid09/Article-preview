const shareBTN = document.querySelector(".share-icon img");
let modal = document.querySelector(".modal");
let share = document.querySelector(".share-icon");

shareBTN.addEventListener("click", () => {
  modal.classList.toggle("showModal");
  share.classList.toggle("changeBG");
});
