import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/atomsAndMolecules/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atomsAndMolecules/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Button",
  color: "blue.400",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  color: "blue.400",
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  color: "blue.400",
  size: "sm",
};
