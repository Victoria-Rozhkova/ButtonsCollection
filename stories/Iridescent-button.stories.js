import { createButton } from "../Buttons/iridescent-button/stories";
import "../Buttons/iridescent-button/iridescent-button.css";

export default {
  title: "Example/Buttons/Iridescent",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Large = Template.bind({});
