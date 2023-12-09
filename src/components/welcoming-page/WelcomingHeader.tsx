const WelcomingHeader = (): JSX.Element => {
  const buttons = [
    { label: "Order Today", id: "btn-1" },
    { label: "Read Free Demo", id: "btn-2" },
  ];
  return (
    <section className="section-header">
      <div className="subtitle">
        <h5>Welcome to Pages</h5>
      </div>
      <div className="title">
        <h1>Books are uniquely portable magic </h1>
      </div>
      <div className="text mt-4">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="buttons mt-4">
        {buttons.map((button, index) => (
          <div className="button">
            <button className="btn" id={button.id}>
              {button.label}
            </button>
          </div>
        ))}
      </div>
      <div className="details"></div>
    </section>
  );
};

export default WelcomingHeader;
