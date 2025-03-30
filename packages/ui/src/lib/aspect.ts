export type AspectRatio =
  | "1:1"
  | "16:9"
  | "4:3"
  | "3:2"
  | "2:1"
  | "21:9"
  | "1.62:1"
  | "1.41:1"
  | "9:16"
  | "3:4"
  | "2:3"
  | "1:1.62"
  | "1:1.41"

export const aspectRatioClassNameMap: Record<AspectRatio, string> = {
  "1:1": "aspect-1/1",
  "16:9": "aspect-16/9",
  "4:3": "aspect-4/3",
  "3:2": "aspect-3/2",
  "2:1": "aspect-2/1",
  "21:9": "aspect-21/9",
  "1.62:1": "aspect-1.62/1",
  "1.41:1": "aspect-1.41/1",
  "9:16": "aspect-9/16",
  "3:4": "aspect-3/4",
  "2:3": "aspect-2/3",
  "1:1.62": "aspect-1/1.62",
  "1:1.41": "aspect-1/1.41",
}
