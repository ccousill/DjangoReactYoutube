import React from "react";
import Top50 from "../components/Top50";
import Navbar from "../components/UI/Navbar";
function Top50Page() {
  return (
    <div className="wrapper">
      <Navbar />
      <Top50 />
    </div>
  );
}

export default Top50Page;
