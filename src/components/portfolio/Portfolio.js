import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { allPortfolio } from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  const list = [
    { id: "all", title: "All" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
  ];

  useEffect(() => {
    const web = allPortfolio.filter((item) => item.categoryId === 1);
    const mobile = allPortfolio.filter((item) => item.categoryId === 2);
    console.log(mobile);
    switch (selected) {
      case "all":
        setData(allPortfolio);
        break;
      case "web":
        setData(web);
        break;
      case "mobile":
        setData(mobile);
        break;
      default:
        setData(allPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>
        Portfolio<span>.</span>
      </h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((value) => (
          <div className="item">
            <img src={value.img} alt="" />
            <h3>{value.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
