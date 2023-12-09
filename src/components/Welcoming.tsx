import WelcomingHeader from "./welcoming-page/WelcomingHeader";

const Welcoming = (): JSX.Element => {
  return (
    <section id="welcoming-page">
      <div className="row gy-5 gy-md-2">
        <div className="col-md-7 col-lg-6">
          <WelcomingHeader />
        </div>
        <div className="col-md-5 col-lg-6">
            <div className="section-cover">
                <img src="/image/Book.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Welcoming;
