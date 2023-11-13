const menuButton = document.querySelector(".main-nav__toggle");
const userNavigation = document.querySelector(".main-nav__wrapper");
const pageHeader = document.querySelector(".page-header");

userNavigation.classList.add("visually-hidden")
pageHeader.classList.remove("page-header--opened");

//Конструкция if else
// menuButton.addEventListener("click", () => {
//   if (userNavigation.classList.contains("visually-hidden")) {
//     userNavigation.classList.remove("visually-hidden");
//     pageHeader.classList.add("page-header--opened");
//   }
//   else {
//     userNavigation.classList.add("visually-hidden");
//     pageHeader.classList.remove("page-header--opened");
//   };
// });

menuButton.addEventListener("click", () => {
  userNavigation.classList.contains("visually-hidden")
      ?
      userNavigation.classList.remove("visually-hidden") &
      pageHeader.classList.add("page-header--opened") &
      menuButton.classList.remove("main-nav__toggle--closed") &
      menuButton.classList.add("main-nav__toggle--opened")
      :
      userNavigation.classList.add("visually-hidden") &
      pageHeader.classList.remove("page-header--opened") &
      menuButton.classList.remove("main-nav__toggle--opened") &
      menuButton.classList.add("main-nav__toggle--closed")
});
