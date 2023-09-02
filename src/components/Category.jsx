import { NavLink } from "react-router-dom";

const Category = ({ handleCategory }) => {
  return (
    // <nav className={navChangePosition ? "hidden" : "block p-5"}>
    //     <ul className="flex flex-row justify-center">
    //         <li className="mx-5 hover:text-red-500">
    //             <NavLink to="/">Popular</NavLink>
    //         </li>
    //         <li className="mx-5 hover:text-red-500">
    //             <NavLink to="/">Top Rated</NavLink>
    //         </li>
    //         <li className="mx-5 hover:text-red-500">
    //             <NavLink to="/">Now Playing</NavLink>
    //         </li>
    //         <li className="mx-5 hover:text-red-500">
    //             <NavLink to="/">Upcoming</NavLink>
    //         </li>
    //     </ul>
    // </nav>

    <div>
      <button value="popular" onClick={handleCategory}>
        Popular
      </button>
      <button value="top_rated" onClick={handleCategory}>
        Top Rated
      </button>
      <button value="now_playing" onClick={handleCategory}>
        Now Playing
      </button>
      <button value="upcoming" onClick={handleCategory}>
        Upcoming
      </button>
    </div>
  );
};

export default Category;
