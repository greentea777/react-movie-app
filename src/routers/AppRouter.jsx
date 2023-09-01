import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import { useEffect, useState } from "react";

const MOVIE_DB_API_URL = "https://api.themoviedb.org/3/";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [genres, setGenres] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0ZDUzZGYzOWI4YTIwYmFlNTcwNDg0YmFiM2NjMSIsInN1YiI6IjY0ZWUzMjY3ZTBjYTdmMDBhZTM4MGFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUCQ6FTPC4_DjGiswyCvLGlWbeHWSe42IxwHAdl9m_k",
    },
  };
  const fetchMovies = () => {
    fetch(
      `${MOVIE_DB_API_URL}discover/movie?language=en-US&page=1&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsloading(false);
      });
  };

  const fetchGenres = () => {
    fetch(`${MOVIE_DB_API_URL}genre/movie/list?language=en`, options)
      .then((response) => response.json())
      .then((data) => setGenres(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);

  const genreList = genres.genres;
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PageHome
                movies={movies}
                genreList={genreList}
                isLoading={isLoading}
              />
            }
          />

          <Route path="/about" exact element={<PageAbout />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
