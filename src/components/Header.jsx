import Nav from "./Nav";
import useMediaQuery from "../hooks/useMediaQuery";

const Header = () => {
  const isBrowser = useMediaQuery("(min-width: 640px)");

  return (
    <header className="fixed flex-col top-0 left-0 right-0 flex items-center bg-black text-white z-10 sm:flex-row">
      <div className="flex justify-center p-2 sm:pl-5">
        <div className="w-12 bg-red-700 h-12 z-50"></div>
      </div>
      {/* {!isBrowser && <Category handleCategory={handleCategory} />} */}
      <Nav isBrowser={isBrowser} />
    </header>
  );
};
export default Header;
