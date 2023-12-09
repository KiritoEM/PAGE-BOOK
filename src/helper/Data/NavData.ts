interface IsocialIcons {
  icon: string;
}

export default function NavData() {
  const socialIcons: IsocialIcons[] = [
    { icon: "/fb.png" },
    { icon: "/twitter.png" },
    { icon: "/linkedIn.png" },
  ];

  return { socialIcons };
}
