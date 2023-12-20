import TopNavBar from "./TopNavBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TopNavBar> = {
  component: TopNavBar,
  title: "Blog",
};

export default meta;

type Story = StoryObj<typeof TopNavBar>;

export const TopNavBar1: Story = {
  args: {
    // userID: "123",
    title: "Blog Title",
    // description: "Blog Description",
    // localImage: "https://picsum.photos/200/300",
    // tag: "Blog Tag",
    // name: "Blog Name",
  },
};
