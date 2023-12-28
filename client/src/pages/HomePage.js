import React from "react";
import Navbar from "../components/UI/Navbar";
import Home from '../components/Home'
function HomePage() {
  return (
    <div className="wrapper">
      <Navbar />
      <Home/>
    </div>
  );
}

export default HomePage;
