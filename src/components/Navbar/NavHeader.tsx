import NavData from "../../helper/Data/NavData";

const NavHeader = (): JSX.Element => {
  const { socialIcons } = NavData();
  return (
    <div id="section-header">
      <div className="logo">
        <img src="/image/Logo.png" alt="" id="logo-img" />
      </div>
      <div className="social-icons mx-3">
        {socialIcons.map((icon, index) => (
          <div className="icon" key={index}>
            <img src={`/image${icon.icon}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavHeader;
