export type AvatarProps = {
  src: string
  alt: string
  isClickable?: boolean
  onKeyDown?: () => void
}

export const Avatar = (props: AvatarProps) => {
  const baseStyles = "w-full rounded-full"
  const clickableStyles =
    "hover:brightness-75 cursor-pointer scale-hovering transition-all"
  const styles = props.isClickable
    ? `${baseStyles} ${clickableStyles}`
    : baseStyles
  return (
    <div className="avatar">
      <div className={styles} onKeyDown={props.onKeyDown}>
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  )
}
