import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import movieLogo from "../assets/images/movie-logo.svg";

const Header = () => {
  const isBrowser = useMediaQuery("(min-width: 640px)");
  return (
    <header className="fixed flex-col top-0 left-0 right-0 flex items-center bg-[#000000c5] sm:bg-transparent text-white sm:flex-row z-30 sm:bg-gradient-to-b sm:from-black sm:from-5% sm:to-transparent">
      <div className="flex justify-center p-2 sm:pl-5 ">
        <NavLink to="/">
          <img className="w-12 h-12" src={movieLogo} alt="Site Logo" />
        </NavLink>
      </div>
      <Nav isBrowser={isBrowser} />
    </header>
  );
};
export default Header;
