import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// 必须大写，不然文档出不来
import Button, { ButtonSize, ButtonType } from "./Button";
import "../../styles/index.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'component/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // parameters: {
  //   info: {
  //     text: 'text'
  //   },
  // },
  // parameters: {
  //   docs: {
  //     page: null,
  //   },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnType: ButtonType.Primary,
  children: "Button",
};

export const Default = Template.bind({});
Default.args = {
  btnType: ButtonType.Default,
  children: "Button",
};

export const Danger = Template.bind({});
Danger.args = {
  btnType: ButtonType.Danger,
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.Large,
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.Small,
  children: "Button",
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};
export const Link = Template.bind({});
Link.args = {
  btnType: ButtonType.Link,
  children: "Button",
  href: "http://github.com",
};
