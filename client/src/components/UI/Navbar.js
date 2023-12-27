import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="header">
      <p>YouTube</p>

      <nav>
        <ul>
          <NavLink exact to="/" className={({isActive})=>isActive ? "active-link" : "link"}><li>Home</li></NavLink>
          <NavLink to="/top50" className={({isActive})=>isActive ? "active-link" : "link"}> <li>Videos</li> </NavLink>
        </ul>
      </nav>

    </header>
  );
}

export default Navbar;
