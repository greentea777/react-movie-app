import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourite from "../pages/PageFavourite";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" exact element={<PageAbout />} />
          <Route path="/favourite" exact element={<PageFavourite />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
