import React from "react";
import Header from "../components/sections/Header";
import SizeAndColor from "../components/sections/SizeAndColor";
import profilimg from "../asset/images/profilimg.png";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/Shoppingcartcontext/CartContext";

const SpecificProductView = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [productVariants, setProductVariants] = useState([]);

  const { addToCart } = useCartContext();

  useEffect(() => {
    // ta emot info från product
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get("data");
    if (data) {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      setProduct(parsedData);
      setPrice(parsedData.variants[0].price);
      setImage(parsedData.variants[0].imageName);
      setProductVariants(parsedData.variants);
      console.log(price);
    }
  }, [price]);

  const selectedProduct = productVariants.find(
    (x) => x.size === selectedSize && x.color === selectedColor
  );

  const onSubmit = (selectedProduct) => {
    console.log(selectedColor);
    console.log(selectedSize);
    console.log(selectedProduct);
    if (selectedProduct) {
      addToCart(selectedProduct);
      console.log(selectedProduct);
      console.log("hej");
    }
  };

  return (
    <div className="container">
      <div>
        <Header
          icon={"fa-solid fa-chevron-left"}
          title={"MANERO"}
          righticon={"fal fa-shopping-bag"}
        />
        <img src={image} className="productimage" alt="the product"></img>
      </div>
      <div className="proddes">
        <p>{product.name}</p>
        <i class="fa-thin fa-heart"></i>
      </div>
      <div className="highlvlstyling">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span>(23)</span>
        <p>${price}</p>
      </div>
      <div>
        <SizeAndColor
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>
      <div className="proddescrip">
        Description
        <p className="insideproddescrip">{product.description}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="basebtn" onClick={() => onSubmit(selectedProduct)}>+ ADD TO CART</button>
      </div>
      <div className="proddes">
        <p>Reviews (23)</p>
        <p>
          View All <i className="fa-solid fa-chevron-right"></i>
        </p>
      </div>
      <div className="asdf">
        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-2">
              <img src={profilimg} alt="asdf" />
            </div>
            <div className="col-4">
              <p>Anette Black</p>
            </div>
            <div className="col-6">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="col">
              <p>
                Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo
                veniam sint est mollit proident commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="asdf">
        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-9">
              <p>Anette Black</p>
            </div>
            <div className="col-3">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="col">
              <p>
                Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo
                veniam sint est mollit proident commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="asdf">
        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-9">
              <p>Anette Black</p>
            </div>
            <div className="col-3">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className="col">
              <p>
                Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo
                veniam sint est mollit proident commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificProductView;
