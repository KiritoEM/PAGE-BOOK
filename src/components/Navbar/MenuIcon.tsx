import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuIcon = () : JSX.Element => {
    return (
        <div className="menu-icon">
             <FontAwesomeIcon icon={faBars} id="menu-icon"/>
        </div>
    );
};

export default MenuIcon;