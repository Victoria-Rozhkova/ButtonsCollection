import "./custom-btn.css";

export const createButton = ({
  variant = "btn-1",
  background,
  color,
  label = "Button",
  onClick = () => console.log("click"),
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  const span = document.createElement("span");
  const span2 = document.createElement("span");

  if (variant === "btn-12") {
    span.innerText = label;
    span2.innerText = "Press";
    btn.append(span);
    btn.append(span2);
  } else if (
    variant === "btn-3" ||
    variant === "btn-4" ||
    variant === "btn-5" ||
    variant === "btn-6" ||
    variant === "btn-7" ||
    variant === "btn-8"
  ) {
    span.innerText = label;
    btn.append(span);
  } else {
    btn.innerText = label;
  }

  btn.addEventListener("click", onClick);

  const mode = (btn.className = ["custom-btn", `${variant}`, mode].join(" "));

  btn.style.background = background;
  btn.style.color = color;

  return btn;
};
