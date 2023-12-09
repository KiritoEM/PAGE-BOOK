import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Itoogle {
  toogle: () => void;
}

const MenuIcon: React.FC<Itoogle> = ({ toogle }): JSX.Element => {
  return (
    <div className="menu-icon d-lg-none" onClick={toogle}>
      <FontAwesomeIcon icon={faBars} id="menu-icon" />
    </div>
  );
};

export default MenuIcon;
