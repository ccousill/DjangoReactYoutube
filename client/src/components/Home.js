import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-section">
      <div className="home-info">
        <h1>Find filtered videos and statistics for the day</h1>
        <h3>Start here and travel through to site</h3>
        <div className="home-buttons">
          <Link to="/" className="button-1">
            Travel to destination
          </Link>
          <Link to="/" className="button-2">
            Travel to destination
          </Link>
        </div>
      </div>

      <div className="home-videos">Preview Videos</div>
    </div>
  );
}

export default Home;
