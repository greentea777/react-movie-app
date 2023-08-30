import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
