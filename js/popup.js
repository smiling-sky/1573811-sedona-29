const button = document.querySelector(".button-offer");
const modal = document.querySelector(".modal")

button.addEventListener("click", function (evt){
    evt.preventDefault();
    modal.classList.toggle("modal-hide");
});
