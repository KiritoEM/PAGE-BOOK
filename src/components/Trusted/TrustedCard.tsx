import React from "react";

interface ItrustedProps {
  img: string;
  title: string;
}

const TrustedCard: React.FC<ItrustedProps> = ({ img, title }): JSX.Element => {
  return (
    <div className="trusted-card">
      <div className="trusted-card__img">
        <img src={img} alt="" />
      </div>
      <div className="trusted-card__content mt-4">
        <h5>{title}</h5>
        <p>A long established fact that a who looking at its layout.</p>
      </div>
    </div>
  );
};

export default TrustedCard;
