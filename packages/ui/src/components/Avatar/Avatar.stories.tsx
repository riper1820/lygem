import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Avatar } from "#components/Avatar/Avatar"

const meta = {
  title: "Avatar",
  component: Avatar,
  args: {
    src: "https://placehold.co/1000",
    alt: "Avatar",
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Static: Story = {}

export const Clickable: Story = {
  args: {
    isClickable: true,
    onKeyDown: fn(),
  },
}
