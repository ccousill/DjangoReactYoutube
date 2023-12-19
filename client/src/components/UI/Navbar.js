import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="header">
      <p>YouTube</p>

      <nav>
        <ul>
          <Link to="/" ><li>Home</li></Link>
          <Link to="top50"> <li>Videos</li> </Link>
        </ul>
      </nav>

    </header>
  );
}

export default Navbar;
