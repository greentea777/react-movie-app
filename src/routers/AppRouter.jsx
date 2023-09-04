import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import { useEffect, useState } from "react";
import PageFavourite from "../pages/PageFavourite";

const MOVIE_DB_API_URL = "https://api.themoviedb.org/3/";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [category, setCategory] = useState("popular");
  const [isLoading, setIsloading] = useState(true);
  const [genres, setGenres] = useState([]);
  const genreList = genres.genres;
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
      `${MOVIE_DB_API_URL}discover/movie?language=en-US&page=1&sort_by=popularity.desc&region=CA`,
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

  const fetchMovieList = (category) => {
    fetch(
      `${MOVIE_DB_API_URL}/movie/${category}?language=en-US&page=1&region=CA`,
      options
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data))
      .catch((err) => console.error(err));
  };

  // Category
  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    fetchMovieList(category);
  }, [category]);

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header handleCategory={handleCategory} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PageHome
                movies={movies}
                genreList={genreList}
                movieList={movieList}
                isLoading={isLoading}
                category={category}
                fetchMovieList={fetchMovieList}
              />
            }
          />
          <Route path="/about" exact element={<PageAbout />} />
          <Route path="/favourite" exact element={<PageFavourite />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
