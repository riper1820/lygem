export type AvatarProps = {
  src: string
  alt: string
  isClickable?: boolean
  onKeyDown?: () => void
}

export const Avatar = (props: AvatarProps) => {
  const baseStyles = "w-full rounded-full"
  const clickableStyles = "clickable-img"
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
