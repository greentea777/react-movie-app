import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

const PageAbout = () => {
  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

  return (
    <main className="flex-1">
      <section className="max-w-6xl mx-auto mt-16 p-5 text-white">
        <h1 className="text-[22px] sm:text-4xl md:text-5xl font-bold py-3 uppercase">About</h1>
        <div className='flex flex-col sm:flex-row gap-8'>
          <div className='px-5 pb-10 border-b-2 border-red-700 sm:p-5 sm:border-r-2 sm:border-b-0 sm:pb-0'>
            <h2 className='text-[22px] sm:text-2xl md:text-3xl font-bold uppercase pb-2'>Welcome to PopMovieDatabase</h2>
            <p>PopMovieDatabase is an online movie database where you can bookmark trending films and must-watch classics to your watchlist.</p>
            <p>Browse trending, popular, top-rated, upcoming, and now playing titles, and get detailed information on each movie, including cast, and plot summaries.</p>
            <p>Find for your favourite film, add it to the Favourite List, and save it for the Watch Later list!</p>
          </div>
          <div className='flex flex-col items-center px-5 sm:p-0'>
            <img className="w-36 h-36" src="/tmdb-logo.svg" alt="TMDB Logo" />
            <p>*This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PageAbout;
