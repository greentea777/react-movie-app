import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";
import tmdbLogo from "../assets/images/tmdb-logo.svg";

const PageAbout = () => {
  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

  return (
    <main className="flex-1">
      <section className="max-w-6xl mx-auto mt-16 p-5 text-white mb-20 sm:mb-0">
        <h1 className="text-[22px] sm:text-4xl md:text-5xl font-bold py-3 uppercase">
          About
        </h1>
        <div className="flex flex-col md:flex-row gap-8 mt-5">
          <article className="min-w-[40%] pb-10 border-b-2 border-red-700 sm:pr-5 md:border-r-2 md:border-b-0 sm:pb-0 mt-5">
            <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold uppercase mb-3">
              Welcome to PopMovie
            </h2>
            <p>
              PopMovie is an online movie database where you can bookmark
              trending films and add must-watch classics to your watchlist.
            </p>
            <p>
              Browse trending, popular, top-rated, upcoming, and now playing
              titles, and get detailed information on each movie, including
              cast, and plot summaries.
            </p>
            <p>
              Find your favourite film, add it to the Favourite List, and save
              it to the Watch Later list!
            </p>
            <p>
              *This product uses the TMDb API but is not endorsed or certified
              by TMDb. This application was created for educational purposes
              only.
            </p>
            <img className="w-36 h-36" src={tmdbLogo} alt="TMDB Logo" />
          </article>
          <div className="sm:p-0 mt-5">
            <article>
              <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold uppercase mb-3">
                About the Team
              </h2>
              <p>
                PopMovie is created by Zhijun Yang, Willy Hsu, and Sally Leung.
                Presently, all three individuals are students in BCIT's
                Front-end Developer program, with their focus on acquiring the
                skills necessary to excel in the fields of web design and
                development. PopMovie serves as a joint endeavor showcasing
                their applied expertise in React.js and the utilization of API
                keys to retrieve data.
              </p>
            </article>

            <article>
              <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold uppercase mb-3 mt-6">
                Contact Us
              </h2>
              <h3 className="sm:text-lg md:text-xl font-bold uppercase">
                Appreciate our work? Reach out to us
              </h3>
              <p>
                Send us a message and reach us through the following channels:
              </p>
              <ul>
                <li className="my-5 sm:flex sm:items-center">
                  <p className="mr-5 inline-block w-[20%] whitespace-nowrap">
                    Zhijun Yang
                  </p>
                  <a
                    className="mr-3"
                    href="https://www.linkedin.com/in/yang-zhijun/"
                  >
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                    </svg>
                  </a>
                  <a className="mr-3" href="mailto:y_1st.zenith@icloud.com">
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
                    </svg>
                  </a>
                  <a className="mr-3" href="https://github.com/zy-link">
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                    </svg>
                  </a>
                </li>
                <li className="my-5 sm:flex sm:items-center">
                  <p className="mr-5 inline-block w-[20%] whitespace-nowrap">
                    Willy Hsu
                  </p>
                  <a
                    className="mr-3"
                    href="https://www.linkedin.com/in/willy-hsu-216137267/"
                  >
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                    </svg>
                  </a>
                  <a className="mr-3" href="mailto:hsu.waiting@gmail.com">
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
                    </svg>
                  </a>
                  <a className="mr-3" href="https://github.com/greentea777/">
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                    </svg>
                  </a>
                </li>
                <li className="my-5 sm:flex sm:items-center">
                  <p className="mr-5 inline-block w-[20%] whitespace-nowrap">
                    Sally Leung
                  </p>
                  <a
                    className="mr-3"
                    href="https://www.linkedin.com/in/sally-leung-06a87618b/"
                  >
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                    </svg>
                  </a>
                  <a className="mr-3" href="mailto:sallyleungg18@gmail.com">
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
                    </svg>
                  </a>
                  <a className="mr-3" href="https://github.com/sleung204">
                    <svg
                      className="inline fill-current hover:fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PageAbout;
