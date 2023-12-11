import LearnData from "../../helper/Data/LearnData";

const LearnContent = (): JSX.Element => {
  const { learnContents } = LearnData();
  return (
    <div className="learn-content">
      <div className="row gx-4 gy-4">
        {learnContents.map((item, index) => (
          <div className="col-6" key={index}>
            <div className="learn-card">
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="text">
                <h5>{item.text}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnContent;
