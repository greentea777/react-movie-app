import { useState, useEffect } from 'react';
import Nav from "./Nav";
import Category from "./Category";

const Header = (handleCategory) => {
  const [navChangePosition, setNavChangePosition] = useState(true);

  const isDesktop = e => {
    if (e.matches) {
      setNavChangePosition(true);
    } else {
      setNavChangePosition(false);
    }
    console.log(e.matches);
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 640px)');
    mediaQuery.addEventListener('change', isDesktop);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

  return (
    <header className="bg-black text-white">
      <Category handleCategory={handleCategory} />
      <Nav navChangePosition={navChangePosition} />
    </header>
  );
};
export default Header;
