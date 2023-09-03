import { useState, useEffect } from 'react';
import Nav from "./Nav";
import Category from "./Category";

const Header = (handleCategory) => {
  const [isBrowser, setBrowser] = useState(window.matchMedia('(min-width: 640px)').matches);
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  const isDesktop = e => {
    if (e.matches) {
      setBrowser(true);
    } else {
      setBrowser(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 640px)');
    mediaQuery.addEventListener('change', isDesktop);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

  return (
    <header className="bg-black text-white">
      {isBrowser ? undefined : <Category handleCategory={handleCategory} />}
      <Nav isBrowser={isBrowser} />
    </header>
  );
};
export default Header;
