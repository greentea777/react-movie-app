import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHouseDamage } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Nav = ({ isBrowser }) => {
  return (
    <nav className="sm:relative bottom-0 w-full fixed p-5 bg-black text-white z-10">
      <ul className="sm:justify-end flex flex-row justify-evenly">
        <li className={isBrowser ? "mx-5 hover:text-red-500" : "p-1"}>
          {isBrowser ? <NavLink to="/">Home</NavLink> : <NavLink to="/"><IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}><FaHouseDamage /></IconContext.Provider></NavLink>}
        </li>
        <li className={isBrowser ? "mx-5 hover:text-red-500" : "p-1"}>
          {isBrowser ? <NavLink to="/about">About</NavLink> : <NavLink to="/about"><IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}><FaInfoCircle /></IconContext.Provider></NavLink>}
        </li>
        <li className={isBrowser ? "mx-5 hover:text-red-500" : "p-1"}>
          {isBrowser ? <NavLink to="/favourite">Favourite</NavLink> : <NavLink to="/favourite"><IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}><FaHeart /></IconContext.Provider></NavLink>}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
