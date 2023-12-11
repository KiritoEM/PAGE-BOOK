import AboutContent from "./about/AboutContent";

const About = (): JSX.Element => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-5">
          <div className="section-cover">
            <img src="/image/about.png" alt="" />
          </div>
        </div>
        <div className="col-7">
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About;
