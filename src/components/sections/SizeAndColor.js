import React from "react";

const SizeAndColor = ({selectedSize, setSelectedSize, selectedColor, setSelectedColor}) => {

  return (
    <section className="sizeandcolorsection">
      <p>Size</p>
      <div className="sizebuttons">
        <button
          className={selectedSize === "XS" ? "sizebtn-selected" : "sizebtn"}
          value="XS"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          XS
        </button>
        <button
          className={selectedSize === "S" ? "sizebtn-selected" : "sizebtn"}
          value="S"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          S
        </button>
        <button
          className={selectedSize === "M" ? "sizebtn-selected" : "sizebtn"}
          value="M"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          M
        </button>
        <button
          className={selectedSize === "L" ? "sizebtn-selected" : "sizebtn"}
          value="L"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          L
        </button>
        <button
          className={selectedSize === "XL" ? "sizebtn-selected" : "sizebtn"}
          value="XL"
          onClick={(e) => setSelectedSize(e.target.value)}
        >
          XL
        </button>
        <button
          className={selectedSize === "XXL" ? "sizebtn-selected" : "sizebtn"}
          value="XXL"
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
              selectedColor === "Röd" ? "colorbtn-selected" : "colorbtn"
            }
            value="Röd"
            style={{backgroundColor: "red"}}
            onClick={(e) => setSelectedColor(e.target.value)}
          >
            
          </button>
          <button
            className={
              selectedColor === "Blå" ? "colorbtn-selected" : "colorbtn"
            }
            value="Blå"
            style={{backgroundColor: "blue"}}
            onClick={(e) => setSelectedColor(e.target.value)}

          >
            
          </button>
          <button
            className={
              selectedColor === "Vit" ? "colorbtn-selected" : "colorbtn"
            }
            value="Vit"
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
              selectedColor === "Svart" ? "colorbtn-selected" : "colorbtn"
            }
            value="Svart"
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
