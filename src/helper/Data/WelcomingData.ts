interface Idetails {
  title: string;
  text: string;
}

export default function WelcomingData() {
  const detailsData: Idetails[] = [
    { text: "586 pages", title: "Pages : " },
    { text: "10 Hours", title: "Length : " },
    { text: "4.5/5 (305 ratings)", title: "Ratings : " },
  ];

  return { detailsData };
}
