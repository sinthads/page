import React from "react";
import "./menu.scss";

export default function Menu({ navOpen, setNavOpen }) {
  return (
    <div className={`menu${navOpen ? " active" : ""}`}>
      <ul onClick={() => setNavOpen(false)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
