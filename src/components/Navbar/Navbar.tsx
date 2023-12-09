import MenuItems from "./MenuItems";
import NavHeader from "./NavHeader";

const Navbar = (): JSX.Element => {
  return (
    <nav id="navbar">
      <div id="navbar__container">
        {/* ==============logo && social-icons============== */}
        <NavHeader />

        {/* ==============menu items============== */}
        <MenuItems />
      </div>
    </nav>
  );
};
export default Navbar;
