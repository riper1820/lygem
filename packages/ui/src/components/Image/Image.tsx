import { type AspectRatio, aspectRatioClassNameMap } from "#lib/aspect.js"

export type ImageProps = {
  src: string
  alt: string
  variant: "flat" | "paper"
  fit: "contain" | "cover"
  aspectRatio: AspectRatio
  href?: string
}

export const Image = (props: ImageProps) => {
  const objectFitClassNameMap = {
    contain: "object-contain",
    cover: "object-cover",
  }

  const variantClassName = () => {
    if (props.href) {
      if (props.variant === "flat") {
        return "clickable-img"
      } else {
        return "clickable-img shadow-scale-hovering"
      }
    } else {
      if (props.variant === "flat") {
        return ""
      } else {
        return "shadow-md"
      }
    }
  }
  const objectFitClassName = objectFitClassNameMap[props.fit]
  const aspectRatioClassName = aspectRatioClassNameMap[props.aspectRatio]

  const InnerImage = () => {
    return (
      <div className={`${variantClassName()} component rounded-3xl`}>
        <img
          src={props.src}
          alt={props.alt}
          className={`${objectFitClassName} ${aspectRatioClassName} w-full rounded-3xl`}
        />
      </div>
    )
  }

  if (props.href) {
    return (
      <a href={props.href}>
        <InnerImage />
      </a>
    )
  }
  return <InnerImage />
}
