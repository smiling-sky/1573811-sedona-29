const button = document.querySelector(".button-offer");
const modal = document.querySelector(".modal");
const arrival = document.querySelector(".input-arrival-date");
const departure = document.querySelector(".input-of-departure");
const formInput = document.querySelector(".search-hotel-form");
const inputAdults = document.querySelector(".input-adults");
const inputChildren = document.querySelector(".input-children");

let storageAdultsSupport = true;
let storageAdults = "";
let storageChildrenSupport = true;
let storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  storageAdultsSupport = false;
  storageChildrenSupport = false;
}

button.addEventListener("click", function (evt) {
  console.log("клик по поиску гостиницы");
  evt.preventDefault();
  modal.classList.toggle("modal-hide");
});

formInput.addEventListener("submit", function (evt) {
  if (!departure.value || !arrival.value || !inputAdults.value || !inputChildren.value) {
    evt.preventDefault();
    console.log(" Нужно заполнить все поля ");
  } else {
    if (storageAdultsSupport) {
      localStorage.setItem("adults", inputAdults.value);
    }
    if (storageChildrenSupport) {
      localStorage.setItem("children", inputChildren.value);
    }
  }
});
