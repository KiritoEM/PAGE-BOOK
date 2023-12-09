import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavData from "../../helper/Data/NavData";
import { faChartBar} from "@fortawesome/free-regular-svg-icons";

const MenuItems = (): JSX.Element => {
  const { menuItems } = NavData();
  return (
    <div id="menu-items" className="d-none d-lg-flex">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.label}
            {item.icon && <FontAwesomeIcon icon={item.icon} className="mx-2"/>}
          </li>
        ))}
        <li id="cart">
             <img src="/image/Cart.png" alt="" />
        </li>
        <li id="order">
             Order Today
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
