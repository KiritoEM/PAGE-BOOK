import TrustedCard from "./Trusted/TrustedCard";
import TrustedData from "../helper/Data/TrustedData";

const Trusted = (): JSX.Element => {
  const { trusted } = TrustedData();
  return (
    <section id="trusted">
      <div className="section-header">
        <h3>Author’s Book Includes</h3>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="row gx-5 gy-4 gy-lg-2">
          {trusted.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <TrustedCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
