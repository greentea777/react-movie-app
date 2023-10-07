import { useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";
import unHappyImg from "../assets/images/unhappy.svg";

const PageNotFound = () => {
  useEffect(() => {
    document.title = `${appTitle} - Page Not Found`;
  }, []);

  return (
    <main className="flex-1">
      <section className="max-w-6xl mx-auto mt-16 p-10 text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold py-3 uppercase">
          404 ... : (
        </h2>
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 my-5 mx-auto"
            src={unHappyImg}
            alt="TMDB Logo"
          />
          <p className="text-[36px] font-bold my-5">Page not found.</p>
          <p className="my-5">
            We are sorry, the page you requested could not be found.
          </p>
          <Link
            className="text-center rounded-full bg-red-500 font-semibold hover:bg-red-400 cursor-pointer w-32 p-2 my-5"
            to="/"
          >
            Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
