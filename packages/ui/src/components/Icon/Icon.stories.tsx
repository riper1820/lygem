import type { Meta, StoryObj } from "@storybook/react"
import { Icon } from "#components/Icon/Icon"

const meta = {
  title: "Icon",
  component: Icon,
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "misskey",
  },
}

export const Outlined: Story = {
  args: {
    name: "misskey",
    outlined: true,
  },
}
