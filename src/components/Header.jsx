import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

const Header = () => {
  const isBrowser = useMediaQuery("(min-width: 640px)");
  return (
    <header className="fixed flex-col top-0 left-0 right-0 flex items-center bg-black text-white sm:flex-row z-50">
      <div className="flex justify-center p-2 sm:pl-5">
        <NavLink
          to="/"
        >
          <div className="w-12 bg-red-700 h-12" />
        </NavLink>
      </div>
      <Nav isBrowser={isBrowser} />
    </header>
  );
};
export default Header;
