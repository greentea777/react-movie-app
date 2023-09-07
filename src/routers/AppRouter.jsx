import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourite from "../pages/PageFavourite";
import PageSingleMovie from "../pages/PageSingleMovie";
import { FavouriteProvider } from "../context/FavouriteContext";

function App() {
  return (
    <BrowserRouter>
      <FavouriteProvider>
        <div className="site-wrapper">
          <Header />
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/movie/:id/*" exact element={<PageSingleMovie />} />
            <Route path="/about" exact element={<PageAbout />} />
            <Route path="/favourite" exact element={<PageFavourite />} />
          </Routes>
          <Footer />
        </div>
      </FavouriteProvider>
    </BrowserRouter>
  );
}

export default App;
