import { Icon } from "#components/Icon/Icon.js"
import type { IconName } from "#lib/iconName.js"

export type CardProps = {
  iconName: IconName
  iconOutlined?: boolean
  primaryText?: string
  secondaryText?: string
  variant: "flat" | "paper"
  href?: string
}

export const Card = (props: CardProps) => {
  const variantClassNameMap = {
    flat: "card-border",
    paper: "shadow-scale-hovering",
  }
  const variantClassName = variantClassNameMap[props.variant]
  return (
    <a href={props.href}>
      <div
        className={`card card-xs hover:bg-base-200 active:bg-base-300 flex flex-row content-center items-center p-2 transition ${variantClassName}`}
      >
        <div className={"size-16"}>
          <Icon name={props.iconName} outlined={props.iconOutlined} />
        </div>

        <div className="card-body">
          <h2 className="card-title">{props.primaryText}</h2>
          <p>{props.secondaryText}</p>
        </div>
      </div>
    </a>
  )
}
