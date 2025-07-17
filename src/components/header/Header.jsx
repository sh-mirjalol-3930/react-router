import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <Link className="logo" to={"/"}> <h1>PAGES</h1> lesson</Link>
          <nav>
            <ul className="row">
              <li><Link to={"/posts"}>Posts</Link></li>
              <li><Link to={"/commentary"}>Comments</Link></li>
              <li><Link to={"/albums"}>Albums</Link></li>
              <li><Link to={"/todos"}>Todos</Link></li>
              <li><Link to={"/users"}>Users</Link></li>
            </ul>
          </nav>
          <Link to={"/login"}>Login</Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
