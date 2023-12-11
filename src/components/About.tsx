import AboutContent from "./about/AboutContent";

const About = (): JSX.Element => {
  return (
    <section id="about">
      <div className="row gx-lg-2 gy-5 gy-md-2">
        <div className="col-md-5">
          <div className="section-cover">
            <img src="/image/about.png" alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About;
