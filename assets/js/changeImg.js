const button = document.querySelector(".button-icon");

button.addEventListener("click", function () {
  const image = document.querySelector(".image");
  image.classList.toggle("active");
  button.classList.toggle("active");
});
