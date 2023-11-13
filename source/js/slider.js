const reviews = document.querySelector(".reviews");
const price = document.querySelector(".price");

const reviewsItems = reviews.querySelectorAll(".slider__item");
const reviewsToggles = reviews.querySelectorAll(".slider__toggle");
const priceItems = price.querySelectorAll(".slider__item");
const priceToggles = price.querySelectorAll(".slider__toggle");

const slider = (sliderItem, sliderToggle) => {
  for (let i=0; i<sliderToggle.length;i++) {
    sliderToggle[i].addEventListener("click", () => {
      for(let j=0; j<sliderToggle.length;j++) {
        sliderToggle[j].classList.remove("slider__toggle--current");
        sliderItem[j].classList.remove("slider__item--current");
      }
      sliderToggle[i].classList.add("slider__toggle--current");
      sliderItem[i].classList.add("slider__item--current");
    })
  }
};

slider(reviewsItems, reviewsToggles);
slider(priceItems, priceToggles);
