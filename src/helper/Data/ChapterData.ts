interface Ichapter {
  title: string;
}

export default function ChapterData() {
  const chapterPoints: Ichapter[] = [
    { title: "Chapter- 01   Get Started Intro" },
    { title: "Chapter- 02   Create a Massive Content" },
    { title: "Chapter- 03   Maintaining the Creative Arcs" },
    { title: "Chapter- 04   The Conclusion" },
  ];

  return { chapterPoints };
}
