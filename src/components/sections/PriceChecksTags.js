import React from "react";
import { useState } from "react";

const PriceChecksTags = () => {
    const [inputPrice, setInputPrice] = useState("");

  return (
    <section className="pricecheckstagssection">
        <div className="price-container">
            <p className="pricetext">Price</p>
            <input type="range" id="pricevalue" name="pricevalue" className="pricerange" min="50" max="2000" onChange={(e) => setInputPrice(e.target.value)} step="1"></input>
            <p className="price-display">${inputPrice}</p>
        </div>
    </section>
  )
};

export default PriceChecksTags;
