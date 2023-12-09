import WelcomingHeader from "./welcoming-page/WelcomingHeader";

const Welcoming = (): JSX.Element => {
  return (
    <section id="welcoming-page">
      <div className="row">
        <div className="col-6">
          <WelcomingHeader />
        </div>
        <div className="col-6">
            <div className="section-cover">
                <img src="/image/Book.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Welcoming;
