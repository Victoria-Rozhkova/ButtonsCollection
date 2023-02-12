import "./neon-btn.css";

export const createButton = ({
  variant = "neon-1",
  backgroundColor,
  color,
  label = "Subscribe",
  onClick = () => console.log("click"),
}) => {
  const a = document.createElement("a");

  const spans = [];

  for (let i = 0; i < 4; i++) {
    const span = document.createElement("span");
    spans[i] = span;
  }

  a.innerText = label;

  spans.map((span) => a.append(span));

  a.addEventListener("click", onClick);

  const mode = (a.className = ["neon-btn", `${variant}`, mode].join(" "));

  a.style.backgroundColor = backgroundColor;
  a.style.color = color;

  return a;
};
