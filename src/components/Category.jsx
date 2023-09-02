import { NavLink } from "react-router-dom";

const Category = ({ navChangePosition }) => {

    return (
        <nav className={navChangePosition ? "hidden" : "block p-5"}>
            <ul className="flex flex-row justify-center">
                <li className="mx-5 hover:text-red-500">
                    <NavLink to="/">Popular</NavLink>
                </li>
                <li className="mx-5 hover:text-red-500">
                    <NavLink to="/">Top Rated</NavLink>
                </li>
                <li className="mx-5 hover:text-red-500">
                    <NavLink to="/">Now Playing</NavLink>
                </li>
                <li className="mx-5 hover:text-red-500">
                    <NavLink to="/">Upcoming</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Category;
