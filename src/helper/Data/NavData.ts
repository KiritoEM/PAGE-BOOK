import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface IsocialIcons {
  icon: IconProp;
}

export default function NavData() {
  const socialIcons: IsocialIcons[] = [
    { icon: faFacebook },
    { icon: faTwitter },
    { icon: faLinkedin },
  ];

  return { socialIcons };
}
