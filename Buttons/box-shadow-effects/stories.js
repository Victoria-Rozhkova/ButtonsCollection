import "./box-shadow-effects.css";

export const createButton = ({
  variant = "fill",
  backgroundColor,
  color,
  label = "Button",
  onClick = () => console.log("click"),
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = (btn.className = ["button", `${variant}`, mode].join(" "));

  btn.style.backgroundColor = backgroundColor;
  btn.style.color = color;

  return btn;
};
