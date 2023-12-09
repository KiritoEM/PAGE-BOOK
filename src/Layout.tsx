import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { NavProvider } from "./hooks/useNav";

interface Ichildren {
  children: ReactNode;
}

const Layout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <NavProvider>
      <Navbar />
      {children}
    </NavProvider>
  );
};

export default Layout;
