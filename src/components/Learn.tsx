import LearnContent from "./Learn/LearnContent";

const Learn = (): JSX.Element => {
  return (
    <section id="learn">
      <div className="section-header">
        <h3>What will you learn?</h3>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="row gx-5 gy-5 gy-lg-2">
          <div className="col-lg-6">
            <LearnContent />
          </div>
          <div className="col-lg-6">
            <div className="learn-cover">
              <img src="/image/leanr-cover.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
