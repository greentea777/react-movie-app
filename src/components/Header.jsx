import { useState, useEffect } from "react";
import Nav from "./Nav";
import Category from "./Category";

const Header = ({ handleCategory }) => {
  const [isBrowser, setIsBrowser] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );

  const isDesktop = (e) => {
    if (e.matches) {
      setIsBrowser(true);
    } else {
      setIsBrowser(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 640px)");
    mediaQuery.addEventListener("change", isDesktop);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", isDesktop);
  }, []);

  return (
    <header className="fixed flex-col top-0 left-0 right-0 flex items-center bg-black text-white z-10 sm:flex-row">
      <div className="flex justify-center p-2 sm:pl-5">
        <div className="w-12 bg-red-700 h-12 z-50"></div>
      </div>
      {!isBrowser && <Category handleCategory={handleCategory} />}
      <Nav isBrowser={isBrowser} />
    </header>
  );
};
export default Header;
