import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHouseDamage } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Nav = ({ navChangePosition }) => {

  return (
    <nav className="sm:relative bottom-0 w-full fixed p-5 bg-black text-white">
      <ul className="sm:justify-end flex flex-row justify-center">
        <li className="mx-5 hover:text-red-500">
          {navChangePosition ? <NavLink to="/">Home</NavLink> : <NavLink to="/"><IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}><FaHouseDamage /></IconContext.Provider></NavLink>}
        </li>
        <li className="mx-5 hover:text-red-500">
          {navChangePosition ? <NavLink to="/">About</NavLink> : <NavLink to="/"><IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}><FaInfoCircle /></IconContext.Provider></NavLink>}
        </li>
        <li className="mx-5 hover:text-red-500">
          {navChangePosition ? <NavLink to="/">Favourite</NavLink> : <NavLink to="/"><IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}><FaHeart /></IconContext.Provider></NavLink>}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
