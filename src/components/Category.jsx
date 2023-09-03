import { useState, useEffect } from "react";
const Category = ({ handleCategory }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  let prevScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (window.scrollY > 64) {
      if (currentScrollY > prevScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      prevScrollY = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all duration-300 ease-in-out w-full bg-black grid grid-cols-2 justify-items-center min-[420px]:flex min-[420px]:justify-evenly  z-10 overflow-hidden ${
        isHeaderVisible ? "min-[420px]:h-10 h-20" : "h-0"
      }`}
    >
      <label className="w-full hover:text-red-500 min-[420px]:w-auto">
        <input
          className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer"
          type="radio"
          name="radios"
          value="popular"
          onClick={handleCategory}
        />
        <span className="flex justify-center p-2 peer-checked:text-black peer-checked:bg-white whitespace-nowrap">
          Popular
        </span>
      </label>

      <label className="w-full hover:text-red-500 min-[420px]:w-auto">
        <input
          className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer"
          type="radio"
          name="radios"
          value="top_rated"
          onClick={handleCategory}
        />
        <span className="flex justify-center p-2 peer-checked:text-black peer-checked:bg-white whitespace-nowrap">
          Top Rated
        </span>
      </label>

      <label className="w-full hover:text-red-500 min-[420px]:w-auto">
        <input
          className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer"
          type="radio"
          name="radios"
          value="now_playing"
          onClick={handleCategory}
        />
        <span className="flex justify-center p-2 peer-checked:text-black peer-checked:bg-white whitespace-nowrap">
          Now Playing
        </span>
      </label>

      <label className="w-full hover:text-red-500 min-[420px]:w-auto">
        <input
          className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer"
          type="radio"
          name="radios"
          value="upcoming"
          onClick={handleCategory}
        />
        <span className="flex justify-center p-2 peer-checked:text-black peer-checked:bg-white whitespace-nowrap">
          Upcoming
        </span>
      </label>
    </nav>
  );
};

export default Category;
