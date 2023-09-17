import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  function handleSetRating(rating) {
    setMovieRating(rating);
  }

  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetRating={handleSetRating}
      ></StarRating>
      <p>This movie was rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        size={24}
        color="red"
        className="test"
        defaultRating={3}
      />
      <Test></Test>
    </>
  </React.StrictMode>
);
