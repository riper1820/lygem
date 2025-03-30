import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "#components/Card/Card"

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Flat: Story = {
  args: {
    primaryText: "PrimaryText",
    secondaryText: "Secondary text",
    variant: "flat",
    iconName: "misskey",
    href: "https://example.com",
  },
}

export const Paper: Story = {
  args: {
    primaryText: "PrimaryText",
    secondaryText: "Secondary text",
    variant: "paper",
    iconName: "misskey",
    href: "https://example.com",
  },
}
