"use strict";
const slidesArr = [...document.querySelectorAll(".slide")];
const activeImage = document.querySelector(".active");
let index = Number(activeImage === null || activeImage === void 0 ? void 0 : activeImage.id);
let nextIndex;
function initFunction() {
    const rightBtn = document.getElementById("right-btn");
    const leftBtn = document.getElementById("left-btn");
    rightBtn === null || rightBtn === void 0 ? void 0 : rightBtn.addEventListener("click", slidesRight);
    leftBtn === null || leftBtn === void 0 ? void 0 : leftBtn.addEventListener("click", slidesleft);
}
function slidesRight(ev) {
    ev.preventDefault();
    index < 8 ? (nextIndex = index + 1) : console.log("too big");
    console.log(nextIndex, index);
    if (nextIndex < 8) {
        console.log("right inner clicked");
        slidesArr[nextIndex - 1].classList.add("active");
        slidesArr[index - 1].classList.remove("active");
    }
    index < 8 ? index++ : "";
    return index < 8 ? nextIndex++ : "";
}
function slidesleft(ev) {
    ev.preventDefault();
    console.log(nextIndex, index);
    index === 8 ? (index = 7) : "";
    index > 0 ? (nextIndex = index - 1) : console.log("too small");
    console.log(nextIndex, index);
    if (nextIndex > 0) {
        console.log("right inner clicked");
        slidesArr[nextIndex - 1].classList.add("active");
        slidesArr[index - 1].classList.remove("active");
    }
    index > 0 ? index-- : "";
    return index > 0 ? nextIndex-- : "";
}
initFunction();
