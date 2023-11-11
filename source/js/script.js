let menuButton = document.querySelector(".main-nav__toggle");
let userNavigation = document.querySelector(".main-nav__wrapper");


userNavigation.classList.add("visually-hidden")

menuButton.addEventListener("click", (evt)=>{
  evt.preventDefault;
  userNavigation.classList.toggle("visually-hidden")
})
