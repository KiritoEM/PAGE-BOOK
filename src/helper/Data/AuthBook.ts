interface IAuthBook {
  img: string;
  title: string;
  text: string;
  point: Ipoints[];
}

interface Ipoints {
  title: string;
  text: string;
}

export default function AuthBook() {
  const authBooks: IAuthBook[] = [
    {
      img: "/image/book-1.png",
      text: "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
      title: "Atomic One’s",
      point: [
        { title: "Pages:", text: "586pages" },
        { title: "Length:", text: "10 Hours" },
      ],
    },
    {
      img: "/image/book-2.png",
      text: "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
      title: "The Dark Light",
      point: [
        { title: "Pages:", text: "586pages" },
        { title: "Length:", text: "10 Hours" },
      ],
    },
  ];

  return { authBooks };
}
