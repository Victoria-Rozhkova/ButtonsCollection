import "./iridescent-button.css";

export const createButton = ({
  label = "Hover me",
  onClick = () => console.log("click"),
}) => {
  const div = document.createElement("div");
  const a = document.createElement("a");

  div.className = "bubble-effect-wrapper";
  a.innerText = label;

  a.addEventListener("click", onClick);
  div.append(a);
  const mode = (a.className = [
    "bubble-effect-button",
    "button--bubble",
    mode,
  ].join(" "));

  return div;
};
