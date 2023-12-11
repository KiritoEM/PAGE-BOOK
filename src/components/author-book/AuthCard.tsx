interface IauthProps {
  img: string;
  title: string;
  text: string;
  point: Ipoints[];
}

interface Ipoints {
  title: string;
  text: string;
}

const AuthCard: React.FC<IauthProps> = ({
  img,
  point,
  text,
  title,
}): JSX.Element => {
  return (
    <div className="auth-card">
      <div className="row">
        <div className="col-5">
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-7">
          <div className="content">
            <div className="header">
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
            <div className="details mt-2">
              <div className="row">
                {point.map((item, index) => (
                  <div className="col-6" key={index}>
                    <div className="point">
                      <div className="img">
                        <img src="/image/Point.png" alt="" />
                      </div>
                      <div className="content">
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="button mt-2">
              <button className="btn">Order Today</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthCard;
