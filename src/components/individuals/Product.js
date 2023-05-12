import React, { useState } from "react"


const Product = (props) => {
    const [addedToWishList, setaddedToWishList] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

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

    return (

        //Ska ligga i en Navlink?
        <div className={`d-flex flex-column ${props.cardClass}`}>
            <div className="picture">
                    {props.discountPrice && (
                        <div className="salesIcon d-flex justify-content-center align-items-center">SALE</div>
                    )}
                <div className="pictureIconsBox d-flex flex-column align-items-center">
                    {/* Ska inte vara en Navlink. Button? Ska styra att lägga till i wishlist och kundkorg */}
                    <button onClick={() => toggleClass("heart")}><i className={addedToWishList ? "fa-solid fa-heart pictureIcons d-flex justify-content-center heartIcon" : "fa-light fa-heart pictureIcons d-flex justify-content-center"}></i></button>
                    <button onClick={() => toggleClass("bag")}  className={addedToCart ? "bg-light d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-center"}><i className={addedToCart ? "fa-light fa-bag-shopping pictureIcons bg-light" : "fa-light fa-bag-shopping pictureIcons"}></i></button>
                </div>
            </div>
            <div className="d-flex flex-column align-items-between">
                <p className="rating mb-1">{props.rating}</p>
                <p className="productName mb-1">{props.product}</p>
              
                {props.discountPrice && (
                    <div className="d-flex">
                        <p className="price priceWas mb-1">${props.price}</p>
                        <p className="price priceIs mb-1">${props.discountPrice}</p>
                    </div>
                )}
                {!props.discountPrice && (
                    <p className="price mb-1"></p>
                )}
            </div>
        </div>
    );
};

export default Product;