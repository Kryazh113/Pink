const nav = document.querySelector(".main-nav");
const menuButton = document.querySelector(".main-nav__toggle");
const userNavigation = document.querySelector(".main-nav__wrapper");
const pageHeader = document.querySelector(".page-header");

pageHeader.classList.remove("page-header--opened");

menuButton.addEventListener("click", () => {
  nav.classList.contains('main-nav--closed')
    ?
    nav.classList.add('main-nav--opened') &
    nav.classList.remove('main-nav--closed') &
    pageHeader.classList.add("page-header--opened")
    :
      nav.classList.add('main-nav--closed') &
      nav.classList.remove('main-nav--opened') &
      pageHeader.classList.remove("page-header--opened")
})
