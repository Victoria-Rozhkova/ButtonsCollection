[...document.querySelectorAll(".threeD-button")].forEach((button) => {
  button.addEventListener("click", () => button.classList.toggle("clicked"));
});
