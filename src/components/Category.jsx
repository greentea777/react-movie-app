import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
const Category = ({ handleCategory, category }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  let prevScrollY = window.scrollY;

  const isBrowser = useMediaQuery("(min-width: 420px)");
  const [scrollLimit, setScrollLimit] = useState(isBrowser ? 32 : 64);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isAtPageBottom =
      window.innerHeight + currentScrollY >= document.body.offsetHeight;

    if (
      isAtPageBottom ||
      (window.scrollY > scrollLimit && currentScrollY > prevScrollY)
    ) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }

    prevScrollY = currentScrollY;
  };

  useEffect(() => {
    if (isBrowser) {
      setScrollLimit(32);
    } else {
      setScrollLimit(50);
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
      className={`fixed top-16 left-0 transition-all duration-300 ease-in-out w-full bg-[#000000c5] text-white grid grid-cols-2 z-30 overflow-hidden content-center text-sm	min-[420px]:grid-cols-4 min-[420px]:text-base gap-2 px-2 ${
        isHeaderVisible ? "min-[420px]:h-10 h-16" : "h-0"
      }`}
    >
      {categoryButtons.map((button, index) => (
        <label key={index}>
          <input
            className="hidden peer"
            type="radio"
            name="radios"
            checked={category === button.value}
            value={button.value}
            onChange={handleCategory}
          />
          <span className="transition-colors hover:text-red-500 duration-200 ease-in-out block cursor-pointer select-none text-center p-1 rounded-xl peer-checked:text-white peer-checked:bg-red-500 peer-checked:font-bold whitespace-nowrap">
            {button.name}
          </span>
        </label>
      ))}
    </nav>
  );
};

export default Category;
