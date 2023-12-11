import TrustedCard from "./Trusted/TrustedCard";

const Trusted = (): JSX.Element => {
  return (
    <section id="trusted">
      <div className="section-header">
        <h3>Author’s Book Includes</h3>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-3">
            <TrustedCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
