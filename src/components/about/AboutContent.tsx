interface Icount {
  count: string;
  text: string;
  id?: string;
}

const AboutContent = (): JSX.Element => {
  const aboutCount: Icount[] = [
    { count: "02", text: "Books Published", id: "count-1" },
    { count: "4.5", text: "User Reviews", id: "count-2" },
    { count: "04", text: "Best Seller Awards", id: "count-3" },
  ];

  return (
    <div className="section-content">
      <div className="title">
        <h3>Author’s Book Includes</h3>
        <div className="line"></div>
      </div>
      <div className="text">
        <p>
          All the Lorem Ipsum generators on the Internet tend to repeated
          predefined chunks as necessary, making this the first true value
          generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful.
        </p>
      </div>
      <div className="counter">
        {aboutCount.map((item, index) => (
          <div className="item" id={item.id}>
            <h1>{item.count}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
