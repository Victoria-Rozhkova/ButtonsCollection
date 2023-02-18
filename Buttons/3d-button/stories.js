import "./3d-button.css";

export const createButton = ({
  variant = "one",
  color,
  label = "Click",
  endLabel = "Thank You!",
  onClick = () => console.log("click"),
}) => {
  const btn = document.createElement("button");
  const wrapper = document.createElement("div");

  wrapper.className = "threeD-button-wrapper";

  const classes = ["front", "top", "right", "bottom", "left", "back"];

  classes.map((name) => {
    const div = document.createElement("div");
    div.className = `threeD-button-${name}`;
    if (name === "front") {
      div.innerText = label;
    }
    if (name === "back") {
      div.innerText = endLabel;
    }
    wrapper.append(div);
  });

  btn.type = "button";
  
  btn.addEventListener("click", () => btn.classList.toggle("clicked"));

  const mode = (btn.className = ["threeD-button", variant, mode].join(" "));

  btn.append(wrapper);

  btn.style.color = color;

  return btn;
};
