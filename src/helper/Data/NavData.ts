import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faSortDown } from "@fortawesome/free-solid-svg-icons";

interface IsocialIcons {
  icon: string;
}

interface ImenuItems{
    icon?: IconProp;
    label :string;
    id?:string
}

export default function NavData() {
  const socialIcons: IsocialIcons[] = [
    { icon: "/fb.png" },
    { icon: "/twitter.png" },
    { icon: "/linkedIn.png" },
  ];

  const menuItems : ImenuItems[] =[
    {label:"Home"},
    {label:"Pages" , icon:faChevronDown},
    {label:"About"},
    {label:"Services"},
    {label:"Contact"},
  ]

  return { socialIcons , menuItems };
}
