import StaffPick from "./StaffPick";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StaffPick> = {
  component: StaffPick,
  title: "StaffPick",
};

export default meta;

type Story = StoryObj<typeof StaffPick>;

export const StaffPickComponent: Story = {
  args: {
    authorName: "",
    tag: "",
    title: "",
  },
};
