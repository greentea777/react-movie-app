import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHouseDamage, FaInfoCircle, FaHeart, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Nav = ({ isBrowser }) => {
  const [searchInput, setSearchInput] = useState("");
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const handleSearchBar = () => {
    setToggleSearchBar(!toggleSearchBar);
  };

  const handleNavLinkClick = () => {
    setToggleSearchBar(false);
    setSearchInput("");
  };
  return (
    <nav className="sm:relative bottom-0 w-full fixed p-5 bg-black sm:bg-transparent text-white z-40">
      <SearchBar
        handleSearchBar={handleSearchBar}
        toggleSearchBar={toggleSearchBar}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleNavLinkClick={handleNavLinkClick}
      />

      <ul className="sm:justify-end flex flex-row justify-evenly gap-5 ">
        <li className={isBrowser ? "p-0" : "p-1"}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 hover:text-red-500"
                : "hover:text-red-500"
            }
            onClick={handleNavLinkClick}
          >
            {isBrowser ? (
              "Home"
            ) : (
              <IconContext.Provider
                value={{ size: "1.5em", className: "hover:text-red-500" }}
              >
                <FaHouseDamage />
              </IconContext.Provider>
            )}
          </NavLink>
        </li>
        <li className={isBrowser ? "p-0" : "p-1"}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 hover:text-red-500"
                : "hover:text-red-500"
            }
            onClick={handleNavLinkClick}
          >
            {isBrowser ? (
              "About"
            ) : (
              <IconContext.Provider
                value={{ size: "1.5em", className: "hover:text-red-500" }}
              >
                <FaInfoCircle />
              </IconContext.Provider>
            )}
          </NavLink>
        </li>
        <li className={isBrowser ? "p-0" : "p-1"}>
          <NavLink
            to="/favourite"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 hover:text-red-500"
                : "hover:text-red-500"
            }
            onClick={handleNavLinkClick}
          >
            {isBrowser ? (
              "Favourites"
            ) : (
              <IconContext.Provider
                value={{ size: "1.5em", className: "hover:text-red-500" }}
              >
                <FaHeart />
              </IconContext.Provider>
            )}
          </NavLink>
        </li>
        <li className="flex items-center">
          <IconContext.Provider
            value={{ size: "1.5em", className: "hover:text-red-500" }}
          >
            <button
              onClick={() => {
                handleSearchBar();
                setSearchInput("");
              }}
            >
              <FaSearch />
            </button>
          </IconContext.Provider>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
