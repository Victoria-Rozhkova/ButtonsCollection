import { createRange } from "../Ranges/long-cat/stories";

export default {
  title: "Example/Ranges/Long-cat",
  argTypes: {
    labelText: { control: "text" },
    max: { control: "text" },
    min: { control: "text" },
    value: { control: "text" },
  },
};

const Template = ({ labelText, ...args }) => {
  return createRange({ labelText, ...args });
};

export const Longcat = Template.bind({});
Longcat.args = {
  labelText: "longcat1",
  max: 15,
  value: 8,
};

export const Tacgnol = Template.bind({});
Tacgnol.args = {
  labelText: "tacgnol1",
};
