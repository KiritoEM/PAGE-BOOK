const Callout = (): JSX.Element => {
  return (
    <section id="callout">
      <div className="row gy-5 gy-md-2">
        <div className="col-md-6">
          <div className="section-header">
            <div className="title">
              <h3>Get Book Copy Today!</h3>
              <div className="line"></div>
            </div>
            <div className="text">
              <p>
                This the first true value generator on the Internet. It uses
                alphas dictionary of over 200 Latin words.
              </p>
            </div>
            <div className="button">
                 <button className="btn">Order Today</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
             <div className="section-cover">
                  <img src="/image/callout.png" alt="" />
             </div>
        </div>
      </div>
    </section>
  );
};

export default Callout;
