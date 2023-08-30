import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
};
export default Nav;
