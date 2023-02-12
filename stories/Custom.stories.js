import { createButton } from "../Buttons/custom-btn/stories";

export default {
  title: "Example/Buttons/Custom",
  argTypes: {
    label: { control: "text" },
    background: { control: "color" },
    color: { control: "color" },
    onClick: { action: "onClick" },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Hover1 = Template.bind({});
Hover1.args = {
  variant: "btn-1",
};

export const Hover2 = Template.bind({});
Hover2.args = {
  variant: "btn-2",
};

export const Hover3 = Template.bind({});
Hover3.args = {
  variant: "btn-3",
};

export const Hover4 = Template.bind({});
Hover4.args = {
  variant: "btn-4",
};

export const Hover5 = Template.bind({});
Hover5.args = {
  variant: "btn-5",
};

export const Hover6 = Template.bind({});
Hover6.args = {
  variant: "btn-6",
};

export const Hover7 = Template.bind({});
Hover7.args = {
  variant: "btn-7",
};

export const Hover8 = Template.bind({});
Hover8.args = {
  variant: "btn-8",
};

export const Hover9 = Template.bind({});
Hover9.args = {
  variant: "btn-9",
};

export const Hover10 = Template.bind({});
Hover10.args = {
  variant: "btn-10",
};

export const Hover11 = Template.bind({});
Hover11.args = {
  variant: "btn-11",
};

export const Hover12 = Template.bind({});
Hover12.args = {
  variant: "btn-12",
};

export const Hover13 = Template.bind({});
Hover13.args = {
  variant: "btn-13",
};

export const Hover14 = Template.bind({});
Hover14.args = {
  variant: "btn-14",
};

export const Hover15 = Template.bind({});
Hover15.args = {
  variant: "btn-15",
};

export const Hover16 = Template.bind({});
Hover16.args = {
  variant: "btn-16",
};