import { type AspectRatio, aspectRatioClassNameMap } from "#lib/aspect.js"

export type ImageProps = {
  src: string
  alt: string
  variant: "flat" | "paper"
  fit: "contain" | "cover"
  aspectRatio: AspectRatio
}

export const Image = (props: ImageProps) => {
  const variantClassNameMap = {
    flat: "flat",
    paper: "paper",
  }
  const objectFitClassNameMap = {
    contain: "object-contain",
    cover: "object-cover",
  }

  const variantClassName = variantClassNameMap[props.variant]
  const objectFitClassName = objectFitClassNameMap[props.fit]
  const aspectRatioClassName = aspectRatioClassNameMap[props.aspectRatio]

  return (
    <div className={`${variantClassName} component rounded-3xl`}>
      <img
        src={props.src}
        alt={props.alt}
        className={`${objectFitClassName} ${aspectRatioClassName} w-full rounded-3xl`}
      />
    </div>
  )
}
