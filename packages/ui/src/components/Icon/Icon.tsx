import { FaGlobe, FaTwitter, FaXTwitter } from "react-icons/fa6"
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiMastodon,
  SiMisskey,
} from "react-icons/si"
import type { IconName } from "#lib/iconName.js"
export type IconProps = {
  name: IconName
  outlined?: boolean
}

export type PresetIconProps = {
  name: IconName
}

const PresetIcon = (props: PresetIconProps) => {
  switch (props.name) {
    case "misskey":
      return <SiMisskey size="100%" />
    case "mastodon":
      return <SiMastodon size="100%" />
    case "twitter":
      return <FaTwitter size="100%" />
    case "x":
      return <FaXTwitter size="100%" />
    case "github":
      return <SiGithub size="100%" />
    case "instagram":
      return <SiInstagram size="100%" />
    case "facebook":
      return <SiFacebook size="100%" />
    case "web":
      return <FaGlobe size="100%" />
    default:
      return <FaGlobe size="100%" />
  }
}

export const Icon = (props: IconProps) => {
  return (
    <div
      className={`${props.outlined ? "outline-2 outline-solid" : ""} w-full flex content-center justify-center `}
    >
      <div className="w-9/10">
        <PresetIcon name={props.name} />
      </div>
    </div>
  )
}
