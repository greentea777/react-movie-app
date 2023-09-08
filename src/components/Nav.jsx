import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHouseDamage } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Nav = ({ isBrowser }) => {
  return (
    <nav className="sm:relative bottom-0 w-full fixed p-5 bg-black text-white z-10">
      <ul className="sm:justify-end flex flex-row justify-evenly gap-5">
        <li className={isBrowser ? "hover:text-red-500" : "p-1"}>
          {isBrowser ? (
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 hover:text-red-500" : ""
              }
            >
              Home
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 hover:text-red-500" : ""
              }
            >
              <IconContext.Provider
                value={{ size: "1.5em", className: "hover:text-red-500" }}
              >
                <FaHouseDamage />
              </IconContext.Provider>
            </NavLink>
          )}
        </li>
        <li className={isBrowser ? "hover:text-red-500" : "p-1"}>
          {isBrowser ? (
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 hover:text-red-500" : ""
              }
            >
              About
            </NavLink>
          ) : (
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 hover:text-red-500" : ""
              }
            >
              <IconContext.Provider
                value={{ size: "1.5em", className: "hover:text-red-500" }}
              >
                <FaInfoCircle />
              </IconContext.Provider>
            </NavLink>
          )}
        </li>
        <li className={isBrowser ? "hover:text-red-500" : "p-1"}>
          {isBrowser ? (
            <NavLink
              to="/favourite"
              className={({ isActive }) =>
                isActive ? "text-blue-500 hover:text-red-500" : ""
              }
            >
              Favourite
            </NavLink>
          ) : (
            <NavLink
              to="/favourite"
              className={({ isActive }) =>
                isActive ? "text-blue-500 hover:text-red-500" : ""
              }
            >
              <IconContext.Provider
                value={{ size: "1.5em", className: "hover:text-red-500" }}
              >
                <FaHeart />
              </IconContext.Provider>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
