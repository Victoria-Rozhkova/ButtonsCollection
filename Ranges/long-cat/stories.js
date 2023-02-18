import "./long-cat.css";
import "./long-cat.js";

export const createRange = ({
  max = 100,
  min = 0,
  value = 50,
  labelText = "longcat1",
}) => {
  const div = document.createElement("div");
  const form = document.createElement("form");

  const label = document.createElement("label");
  const input = document.createElement("input");

  div.className = "wrapper";

  input.type = "range";
  input.name = labelText;
  input.id = labelText;
  input.min = min;
  input.max = max;
  input.value = value;

  label.setAttribute("for", labelText);
  label.innerText = "Longcat 1";

  form.append(label);
  form.append(input);
  div.append(form);

  return div;
};
