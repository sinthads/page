import React from "react";
import "./blogs.scss";
import placeholder from "../../img/blogs/comingsoon.svg";

function Blogs() {
  return (
    <div className="blogs" id="blogs">
      <h1>
        Blogs<span>.</span>
      </h1>
      <div className="blogs-container">
        <img src={placeholder} alt="" />
      </div>
    </div>
  );
}

export default Blogs;
