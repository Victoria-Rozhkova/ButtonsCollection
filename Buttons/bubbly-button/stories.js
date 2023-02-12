import "./bubbly-button.css";

const animateButton = function (e) {
  e.preventDefault;

  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

export const createButton = ({
  backgroundColor,
  color,
  label = "Press me",
  onClick,
}) => {
  const btn = document.createElement("button");

  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", animateButton);

  const mode = (btn.className = ["bubbly-button", mode].join(" "));

  btn.style.backgroundColor = backgroundColor;
  btn.style.color = color;

  return btn;
};
