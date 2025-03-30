import type { Meta, StoryObj } from "@storybook/react"
import { Image } from "#components/Image/Image"

const meta = {
  title: "Image",
  component: Image,
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const CoveredFlat: Story = {
  args: {
    src: "https://placehold.co/1000",
    alt: "Placeholder Image",
    variant: "flat",
    fit: "cover",
    aspectRatio: "16:9",
  },
}

export const CoveredPaper: Story = {
  args: {
    src: "https://placehold.co/1000",
    alt: "Placeholder Image",
    variant: "paper",
    fit: "cover",
    aspectRatio: "16:9",
  },
}

export const ContainedPaper: Story = {
  args: {
    src: "https://placehold.co/1000",
    alt: "Placeholder Image",
    variant: "paper",
    fit: "contain",
    aspectRatio: "16:9",
  },
}
