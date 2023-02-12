import { createButton } from "../Buttons/box-shadow-effects/stories";

export default {
  title: "Example/Buttons/Box-shadow-effects",
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    color: { control: "color" },
    onClick: { action: "onClick" },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Fill = Template.bind({});
Fill.args = {
  variant: "fill",
  label: "Fill In",
};

export const Pulse = Template.bind({});
Pulse.args = {
  variant: "pulse",
  label: "Pulse",
};

export const Close = Template.bind({});
Close.args = {
  variant: "close",
  label: "Close",
};

export const Raise = Template.bind({});
Raise.args = {
  variant: "raise",
  label: "Raise",
};

export const Up = Template.bind({});
Up.args = {
  variant: "up",
  label: "Fill Up",
};

export const Slide = Template.bind({});
Slide.args = {
  variant: "slide",
  label: "Slide",
};

export const Offset = Template.bind({});
Offset.args = {
  variant: "offset",
  label: "Offset",
};