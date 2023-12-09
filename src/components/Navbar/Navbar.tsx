import MenuItems from "./MenuItems";
import NavHeader from "./NavHeader";
import NavResponsive from "./NavResponsive";
import MenuIcon from "./MenuIcon";

const Navbar = (): JSX.Element => {
  return (
    <nav id="navbar">
      <div id="navbar__container">
        {/* ==============logo && social-icons============== */}
        <NavHeader />

        {/* ==============menu items============== */}
        <MenuItems />

        {/* ==============menu icon============== */}
        <MenuIcon />
      </div>

      {/* ==============navbar responsive============== */}
      <NavResponsive />
    </nav>
  );
};
export default Navbar;
