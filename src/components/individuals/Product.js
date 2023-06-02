import React, { useState } from "react"
import { useCartContext } from "../../context/Shoppingcartcontext/CartContext";


const Product = ({cardClass, product, discountPrice}) => {
    const [addedToWishList, setaddedToWishList] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const {items, addToCart, removeFromCart} = useCartContext();

    const toggleClass = (icon) => {
        if(icon === "heart"){
            let toggle = !addedToWishList;
            setaddedToWishList(toggle);
            console.log("wishlist  "+ addedToWishList);
            console.log("cart  "+ addedToCart);
        } else{
            let toggle = !addedToCart;
            setAddedToCart(toggle);
            console.log("wishlist  "+ addedToWishList);
            console.log("cart  "+ addedToCart);
        }
    };

    const handleClick = (icon, item) => {
        toggleClass(icon);
        if(!addedToCart) addToCart(item.product.variants[0]);
        removeFromCart(item.product.variants[0]);
        console.log(items);
        console.log(item.product.variants[0]);
    }

    const onClick = (item) => {
        const newData = item.product;
          const params = new URLSearchParams();
          params.append("data", JSON.stringify(newData)); 
          window.location.href = `/SpecificProduct?${params.toString()}`;
    }

    return (

        //Ska ligga i en Navlink?
        <div className={`d-flex flex-column ${cardClass}`}>
            <div className="picture">
                    {discountPrice && (
                        <div className="salesIcon d-flex justify-content-center align-items-center">SALE</div>
                    )}
                    <img src={product.variants[0].imageName} alt="produkter"></img>
                <div className="pictureIconsBox d-flex flex-column align-items-center">
                    {/* Ska inte vara en Navlink. Button? Ska styra att lägga till i wishlist och kundkorg */}
                    <button onClick={() => toggleClass("heart")}><i className={addedToWishList ? "fa-solid fa-heart pictureIcons d-flex justify-content-center heartIcon" : "fa-light fa-heart pictureIcons d-flex justify-content-center"}></i></button>
                    <button onClick={() => handleClick("bag", {product})}  className={addedToCart ? "bg-light d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-center"}><i className={addedToCart ? "fa-light fa-bag-shopping pictureIcons bg-light" : "fa-light fa-bag-shopping pictureIcons"}></i></button>
                </div>
            </div>
            <div className="d-flex flex-column align-items-between">
                {/* <p className="rating mb-1">{product.rating}</p> */}
                <p className="productName mb-1" onClick={() => onClick({product})}>{product.name}</p>
                <p className="price mb-1">${product.variants[0].price}</p>
                {/* {discountPrice && (
                    <div className="d-flex">
                        <p className="price priceWas mb-1">${product.variants[0].price}</p>
                        { <p className="price priceIs mb-1">${props.discountPrice}</p> }
                    </div>
                )} */}
                {/* {!discountPrice && (
                    <p className="price mb-1">${product.variants[0].price}</p>
                )} */}
            </div>
        </div>
    );
};

export default Product;