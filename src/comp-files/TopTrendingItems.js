import React from "react";
// import { Link } from "react-router-dom";
import "./app-style/_topTrendingItemImage.scss";

import { TopProducts } from "../utilities";

const TopTrendingItems = () => {
  return (
    <div className="trending__bar">
      {TopProducts.images.map((value, i) => (
        <span key={i}>
        <img src= {value.url} alt= {value.name} className = "top__trending__item__image"/>
        <span>{value.name}</span>
        </span>
      ))}
    </div>
  );
};

export default TopTrendingItems;
