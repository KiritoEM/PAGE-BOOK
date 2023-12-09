import MenuItems from "./MenuItems";
import NavHeader from "./NavHeader";
import NavResponsive from "./NavResponsive";
import MenuIcon from "./MenuIcon";
import { useNav } from "../../hooks/useNav";
import Overlay from "./Overlay";

const Navbar = (): JSX.Element => {
  const { menuToogle, openOverlay } = useNav();
  return (
    <nav id="navbar">
      <div id="navbar__container">
        {/* ==============logo && social-icons============== */}
        <NavHeader />

        {/* ==============menu items============== */}
        <MenuItems />

        {/* ==============menu icon============== */}
        <MenuIcon toogle={menuToogle} />
      </div>
      {/* ==============overlay pour le responsive============== */}
      <Overlay overlay={openOverlay} />
      {/* ==============navbar responsive============== */}
      <NavResponsive />
    </nav>
  );
};
export default Navbar;
