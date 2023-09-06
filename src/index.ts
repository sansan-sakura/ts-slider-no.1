const slidesArr = [...document.querySelectorAll<HTMLElement>(".slide")];

const activeImage = document.querySelector(".active");
let index: number = Number(activeImage?.id);

let nextIndex: number;

function initFunction() {
  const rightBtn = document.getElementById("right-btn") as HTMLElement;
  const leftBtn = document.getElementById("left-btn") as HTMLElement;

  rightBtn?.addEventListener("click", slidesRight);
  leftBtn?.addEventListener("click", slidesleft);
}

function slidesRight(ev: Event) {
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

function slidesleft(ev: Event) {
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
