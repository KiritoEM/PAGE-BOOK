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
    { img: "/image/book-1.png", text: "", title: "", point: [{ title: "", text: "" }] },
    { img: "", text: "", title: "", point: [{ title: "", text: "" }] },
  ];
}
