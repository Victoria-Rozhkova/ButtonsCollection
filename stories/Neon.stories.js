import { createButton } from "../Buttons/neon-btn/stories";

export default {
  title: "Example/Buttons/Neon",
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Blue = Template.bind({});
Blue.args = {
  variant: "neon-1",
};

export const Green = Template.bind({});
Green.args = {
  variant: "neon-2",
};

export const Pink = Template.bind({});
Pink.args = {
  variant: "neon-3",
};
