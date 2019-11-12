import React from "react";
import { Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/all">All Characters</Link>
      </nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}
