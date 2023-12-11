interface Itrusted {
  img: string;
  title: string;
}

export default function TrustedData() {
  const trusted: Itrusted[] = [
    {
      img: "/image/trusted-1.png",
      title: "Amazen Corp",
    },
    {
      img: "/image/trusted-2.png",
      title: "Megan Books",
    },
    {
      img: "/image/trusted-3.png",
      title: "Los Books",
    },
    {
      img: "/image/trusted-4.png",
      title: "Urban Lib",
    },
  ];

  return { trusted };
}
