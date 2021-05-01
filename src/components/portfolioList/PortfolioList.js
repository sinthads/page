import React from "react";
import "./portfolioList.scss";

export default function portfolioList({ title, id, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
