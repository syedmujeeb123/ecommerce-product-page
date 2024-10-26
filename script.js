"use strict";
const toggleBtn = document.querySelector(".toggle-btn");
const mobileViewList = document.querySelector(".mobile-view-list");
const closeBtn = document.querySelector(".close-btn");
const cartIcon = document.querySelector(".cart-icon");
const cartBox = document.querySelector(".cart-box");
const plusIcon = document.querySelector(".plus-icon");
const minusIcon = document.querySelector(".minus-icon");
const displayCount = document.querySelector(".display-count");
const productOne = document.querySelector(".product-1");
const productTwo = document.querySelector(".product-2");
const productThree = document.querySelector(".product-3");
const productFour = document.querySelector(".product-4");
const thumnailImg1 = document.querySelector(".thumnail-img-1");
const thumnailImg2 = document.querySelector(".thumnail-img-2");
const thumnailImg3 = document.querySelector(".thumnail-img-3");
const thumnailImg4 = document.querySelector(".thumnail-img-4");
const addToCart = document.querySelector(".add-to-cart");
const checkoutBtn = document.querySelector(".checkout-btn");
const deleteIcon = document.querySelector(".delete-icon");
const cartImg1 = document.querySelector(".cart-img-1");
const emptyMsg = document.querySelector(".empty-msg");
const price1 = parseFloat(document.querySelector(".price-1").textContent);
const count1 = document.querySelector(".count-1");
const total1 = document.querySelector(".total-1");
const navCartCount = document.querySelector(".nav-cart-count");
const productAll = document.querySelectorAll(".product-all");
const scaledImages = document.querySelector(".scaled-images");
const closeIcon = document.querySelector(".close-icon");

//Initial count is 0 for plus minus btns
let count = 0;

//
const thumbnails = [thumnailImg1, thumnailImg2, thumnailImg3, thumnailImg4];
const products = [productOne, productTwo, productThree, productFour];

///Navbar for Mobile by Toggle Button
toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileViewList.classList.remove("-translate-x-[100%]");
});

closeBtn.addEventListener("click", () => {
  mobileViewList.classList.add("-translate-x-[100%]");
});

///CartBox hidden or display
cartIcon.addEventListener("click", () => {
  cartBox.classList.toggle("hidden");
});

///Plus Minus the count on click
plusIcon.addEventListener("click", () => {
  count++;
  displayCount.textContent = count;
  navCartCount.textContent = count;

  itemCalculation(count);
});

minusIcon.addEventListener("click", () => {
  if (count > 0) {
    count--;
    displayCount.textContent = count;
    navCartCount.textContent = count;
  }
  itemCalculation(count);
});

thumnailImg1.classList.add("active");

// Switch the large product image by clicking on the small thumbnail images
thumbnails.forEach((thumbnail, index) => {
  console.log(thumbnail); // Check if elements are correct
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((thumb) => {
      thumb.classList.remove("active");
    });

    thumbnail.classList.add("active");
    products.forEach((product) => product.classList.add("hidden"));
    products[index].classList.remove("hidden");
  });
});

addToCart.addEventListener("click", () => {
  cartImg1.classList.remove("hidden");
  checkoutBtn.classList.remove("hidden");
  emptyMsg.classList.add("hidden");
  navCartCount.classList.remove("hidden");
  if (count === 0) {
    window.location.reload();
  }
});

deleteIcon.addEventListener("click", () => {
  cartImg1.classList.add("hidden");
  checkoutBtn.classList.add("hidden");
  emptyMsg.classList.remove("hidden");
  displayCount.textContent = 0;
  navCartCount.textContent = "";
});

function itemCalculation(newValue) {
  const price = parseFloat(price1.textContent);
  const total = (total1.textContent = newValue * 125.0);
  count1.textContent = newValue;
}
itemCalculation();

////
const slides = document.querySelectorAll(".slide");

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let curSlide = 0;

const maxSlide = slides.length;

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

const gotoSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
gotoSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  gotoSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

///This code is all for slidups

const slideup = document.querySelectorAll(".slide-up");
const btnRightSide = document.querySelector(".btn-right-side");
const btnLeftSide = document.querySelector(".btn-left-side");
let upSlide = 0;
const maxupSlide = slideup.length;
console.log(maxupSlide);
// slideup
slideup.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

//gotoSlideup
const gotoSlideUp = function (slidep) {
  slideup.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slidep)}%)`)
  );
};
gotoSlideUp(0);

//nextSlideUp
const nextSlideUp = function () {
  if (upSlide === maxupSlide - 1) {
    upSlide = 0;
  } else {
    upSlide++;
  }

  gotoSlideUp(upSlide);
};

//prevslideup
const prevSlideUp = function () {
  if (upSlide === 0) {
    upSlide = maxupSlide - 1;
  } else {
    upSlide--;
  }
  gotoSlideUp(upSlide);
};

btnRightSide.addEventListener("click", nextSlideUp);
btnLeftSide.addEventListener("click", prevSlideUp);

productAll.forEach((item) => {
  item.addEventListener("click", () => {
    scaledImages.classList.remove("hidden");
  });
});

closeIcon.addEventListener("click", () => {
  // window.location.reload();
  closeIcon.classList.add("icon");
});

checkoutBtn.addEventListener("click", () => {
  window.location.reload();
});
