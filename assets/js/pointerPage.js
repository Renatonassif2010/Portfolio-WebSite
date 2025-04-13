window.addEventListener("mousemove", (event) => {
  const divF = document.querySelector(".pointer");
  divF.style.top = event.y + "px";
  divF.style.left = event.x + "px";
});
