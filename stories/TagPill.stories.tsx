import TagPill from "./TagPill";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TagPill> = {
  component: TagPill,
  title: "TagPill",
};

export default meta;

type Story = StoryObj<typeof TagPill>;

export const TagPillComponent: Story = {
  args: {
    value: "",
  },
};
