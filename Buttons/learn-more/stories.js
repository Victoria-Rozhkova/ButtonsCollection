import "./learn-more.css";

export const createButton = ({
  size = "medium",
  backgroundColor,
  color,
  label = "Button",
  onClick = () => console.log("click"),
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = (btn.className = [
    "learn-more",
    `learn-more--${size}`,
    mode,
  ].join(" "));

  btn.style.backgroundColor = backgroundColor;
  btn.style.color = color;

  return btn;
};
