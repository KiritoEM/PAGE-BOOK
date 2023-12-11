import ChapterData from "../../helper/Data/ChapterData";

const ChapterContent = (): JSX.Element => {
  const { chapterPoints } = ChapterData();
  return (
    <div className="row gx-4 gy-4">
      {chapterPoints.map((item, index) => (
        <div className="col-lg-6" key={index}>
          <div className="box">
            <div className="box__title">
              <h5>{item.title}</h5>
            </div>
            <div className="box__text">
              <p>
                Making this the first true value generator on the Internet. It
                of over 200 Latin words, combined with a handful.
              </p>
            </div>
            <div className="box__points">
              <div className="row gy-3 gx-0">
                <div className="col-md-5">
                  <div className="content">
                    <div className="img">
                      <img src="/image/Point.png" alt="" />
                    </div>
                    <div className="content">
                      <h5>Pages :</h5>
                      <p>85pages</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="content">
                    <div className="img">
                      <img src="/image/Point.png" alt="" />
                    </div>
                    <div className="content">
                      <h5>Length :</h5>
                      <p>1 Hour 15 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterContent;
