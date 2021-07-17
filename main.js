const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");

let index = 0;

function render(index) {
  slides.forEach((slide) => {
    slide.classList.add("hidden");
  });

  slides[index].classList.remove("hidden");
}

render(index);

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  render(index);
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index > slides.length - 1) index = 0;
  render(index);
});
