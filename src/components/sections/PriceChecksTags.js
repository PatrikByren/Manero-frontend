import React from "react";
import { useState } from "react";

const PriceChecksTags = () => {
    const [inputPrice, setInputPrice] = useState("");

  return (
    <section className="pricecheckstagssection">
        <div className="price-container">
            <p className="pricetext">Max Price: </p>
            <input type="range" id="pricevalue" name="pricevalue" className="pricerange" min="50" max="2000" onChange={(e) => setInputPrice(e.target.value)} step="1"></input>
            <p className="price-display">${inputPrice}</p>
        </div>
        <div className="checkbox-container">
        <div className="check-box"><input type="checkbox"/><p className="salesIcon">SALE</p></div>
        <div className="check-box"><input type="checkbox"/><p className="salesIcon">SALE</p></div>
        <div className="check-box"><input type="checkbox"/><p className="salesIcon">SALE</p></div>
        </div>
    </section>
  )
};

export default PriceChecksTags;
