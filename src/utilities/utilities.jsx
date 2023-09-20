// Utilities
import { Navigate } from "react-router-dom";

function getYear() {
  const d = new Date();
  return d.getFullYear();
}

const convertCategory = (categoryInput) => {
  const categoryMap = {
    popular: "Popular",
    top_rated: "Top Rated",
    now_playing: "Now Playing",
    upcoming: "Upcoming",
  };

  return categoryMap[categoryInput] || <Navigate to="/404" replace={true} />;
};

export { getYear, convertCategory };
