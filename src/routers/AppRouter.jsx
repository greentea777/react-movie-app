import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourite from "../pages/PageFavourite";
import PageSingleMovie from "../pages/PageSingleMovie";
import PageNotFound from "../pages/PageNotFound";
import PageSingleCategory from "../pages/PageSingleCategory";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={"/popmovie"}>
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
          <Route path="/404" exact element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
