import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
const Category = ({ handleCategory, category }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  let prevScrollY = window.scrollY;

  const isBrowser = useMediaQuery("(min-width: 420px)");
  const [scrollLimit, setScrollLimit] = useState(isBrowser ? 32 : 64);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (window.scrollY > scrollLimit) {
      if (currentScrollY > prevScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      prevScrollY = currentScrollY;
    }
  };

  useEffect(() => {
    if (isBrowser) {
      setScrollLimit(32);
    } else {
      setScrollLimit(64);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBrowser, scrollLimit]);

  const categoryButtons = [
    { name: "Popular", value: "popular" },
    { name: "Top Rated", value: "top_rated" },
    { name: "Now Playing", value: "now_playing" },
    { name: "Upcoming", value: "upcoming" },
  ];

  return (
    <nav
      className={`fixed top-16 transition-all duration-300 ease-in-out w-full bg-black text-white grid grid-cols-2 justify-items-center min-[420px]:flex min-[420px]:justify-evenly z-10 overflow-hidden ${
        isHeaderVisible ? "min-[420px]:h-10 h-20" : "h-0"
      }`}
    >
      {categoryButtons.map((button, index) => (
        <label
          key={index}
          className="w-full hover:text-red-500 min-[420px]:w-auto"
        >
          <input
            className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer"
            type="radio"
            name="radios"
            checked={category === button.value}
            value={button.value}
            onChange={handleCategory}
          />
          <span className="flex justify-center p-2 peer-checked:text-black peer-checked:bg-white whitespace-nowrap">
            {button.name}
          </span>
        </label>
      ))}

      {/* <label className="w-full hover:text-red-500 min-[420px]:w-auto">
        <input
          className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer"
          type="radio"
          name="radios"
          value="popular"
          onChange={handleCategory}
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
          onChange={handleCategory}
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
          onChange={handleCategory}
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
          onChange={handleCategory}
        />
        <span className="flex justify-center p-2 peer-checked:text-black peer-checked:bg-white whitespace-nowrap">
          Upcoming
        </span>
      </label> */}
    </nav>
  );
};

export default Category;
