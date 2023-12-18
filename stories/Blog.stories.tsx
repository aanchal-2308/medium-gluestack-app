import Blog from "./Blog";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Blog> = {
  component: Blog,
  title: "Blog",
};

export default meta;

type Story = StoryObj<typeof Blog>;

export const WithAvatarImage: Story = {
  args: {
    userID: "123",
    title: "Blog Title",
    description: "Blog Description",
    localImage: "https://picsum.photos/200/300",
    tag: "Blog Tag",
    name: "Blog Name",
  },
};
