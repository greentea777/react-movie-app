import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourite from "../pages/PageFavourite";
import PageSingleMovie from "../pages/PageSingleMovie";
import PageNotFound from "../pages/PageNotFound";
import { FavouriteProvider } from "../context/FavouriteContext";
import PageSingleCategory from "../pages/PageSingleCategory";

function App() {
  return (
    <BrowserRouter>
      <FavouriteProvider>
        {/* <div className="site-wrapper max-w-screen-xl mx-auto"> */}
        <div className="flex sm:h-screen flex-col">
          <Header />
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/movie/:id/*" exact element={<PageSingleMovie />} />
            <Route
              path="/movie/:category"
              exact
              element={<PageSingleCategory />}
            />
            <Route path="/about" exact element={<PageAbout />} />
            <Route path="/favourite" exact element={<PageFavourite />} />
            <Route path="*" exact element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </FavouriteProvider>
    </BrowserRouter>
  );
}

export default App;
