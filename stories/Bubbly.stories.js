import { createButton } from "../Buttons/bubbly-button/stories";

export default {
  title: "Example/Buttons/Bubbly",
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

export const Large = Template.bind({});