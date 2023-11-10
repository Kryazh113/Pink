let menuButton = document.querySelector(".main-nav__toggle");
let userNavigation = document.querySelector(".main-nav__wrapper");

menuButton.addEventListener("click", (evt)=>{
  evt.preventDefault;
  userNavigation.classList.toggle("visually-hidden")
})
