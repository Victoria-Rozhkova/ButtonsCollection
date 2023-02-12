import { createButton } from "../Buttons/learn-more/stories";

export default {
  title: "Example/Buttons/Learn-more",
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

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Full = Template.bind({});
Full.args = {
  size: "full",
  label: "Button",
};
