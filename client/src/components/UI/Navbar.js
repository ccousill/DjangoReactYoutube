import React from "react";
import { Link,NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="title-link">YouTube</Link>
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
