import MenuItems from "./Navbar/MenuItems";
import NavHeader from "./Navbar/NavHeader";
import NavResponsive from "./Navbar/NavResponsive";
import MenuIcon from "./Navbar/MenuIcon";
import { useNav } from "../hooks/useNav";
import Overlay from "./Navbar/Overlay";

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
