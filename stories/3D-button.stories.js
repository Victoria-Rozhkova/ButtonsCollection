import { createButton } from "../Buttons/3d-button/stories";

export default {
  title: "Example/Buttons/3D-button",
  argTypes: {
    label: { control: "text" },
    endLabel: { control: "text" },
    variant: { control: "select" },
    color: { control: "color" },
    onClick: { action: "onClick" },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const One = Template.bind({});
One.args = {
  variant: "one",
};
export const Two = Template.bind({});
Two.args = {
  variant: "two",
};
export const Three = Template.bind({});
Three.args = {
  variant: "three",
};
export const Four = Template.bind({});
Four.args = {
  variant: "four",
};
