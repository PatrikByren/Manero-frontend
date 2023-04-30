import React from "react";
import { useState } from "react";

const SizeAndColor = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");


  return (
    <section className="sizeandcolorsection">
      <p>Size</p>
      <div className="sizebuttons">
        <button
          className={selectedSize === "xs" ? "sizebtn-selected" : "sizebtn"}
          value="xs"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          XS
        </button>
        <button
          className={selectedSize === "s" ? "sizebtn-selected" : "sizebtn"}
          value="s"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          S
        </button>
        <button
          className={selectedSize === "m" ? "sizebtn-selected" : "sizebtn"}
          value="m"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          M
        </button>
        <button
          className={selectedSize === "l" ? "sizebtn-selected" : "sizebtn"}
          value="l"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          L
        </button>
        <button
          className={selectedSize === "xl" ? "sizebtn-selected" : "sizebtn"}
          value="xl"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          XL
        </button>
        <button
          className={selectedSize === "xxl" ? "sizebtn-selected" : "sizebtn"}
          value="xxl"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          XXL
        </button>
      </div>
      <div className="colorwrapper">
        <p className="colortext">Color</p>
        <div className="colors">
          <button
            className={
              selectedColor === "red" ? "colorbtn-selected" : "colorbtn"
            }
            value="red"
            style={{backgroundColor: "red"}}
            onClick={(e) => setSelectedColor(e.target.value)}
          >
            
          </button>
          <button
            className={
              selectedColor === "blue" ? "colorbtn-selected" : "colorbtn"
            }
            value="blue"
            style={{backgroundColor: "blue"}}
            onClick={(e) => setSelectedColor(e.target.value)}

          >
            
          </button>
          <button
            className={
              selectedColor === "beige" ? "colorbtn-selected" : "colorbtn"
            }
            value="beige"
            style={{backgroundColor: "beige"}}
            onClick={(e) => setSelectedColor(e.target.value)}
          >
            
          </button>
          <button
            className={
              selectedColor === "dark" ? "colorbtn-selected" : "colorbtn"
            }
            value="dark"
            style={{backgroundColor: "#383838"}}
            onClick={(e) => setSelectedColor(e.target.value)}
          >
            
          </button>
          <button
            className={
              selectedColor === "black" ? "colorbtn-selected" : "colorbtn"
            }
            value="black"
            style={{backgroundColor: "black"}}
            onClick={(e) => setSelectedColor(e.target.value)}
          >
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default SizeAndColor;
