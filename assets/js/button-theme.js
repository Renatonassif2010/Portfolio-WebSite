const buttonTheme = document.getElementById("button-theme");
buttonTheme.addEventListener("click", () => {
  buttonTheme.classList.toggle("active");
  document.querySelector("body").classList.toggle("active");
});
