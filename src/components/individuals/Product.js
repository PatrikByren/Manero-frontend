import React from "react"
import { NavLink } from "react-router-dom";



const Product = (props) => {
   

    return (

        //Ska ligga i en Navlink?
        <div className={`d-flex flex-column ${props.cardClass}`}>
            <div className="picture">
                    {props.discountPrice && (
                        <div className="salesIcon d-flex justify-content-center align-items-center">SALE</div>
                    )}
                <div className="pictureIconsBox d-flex flex-column align-items-center">
                    {/* Ska inte vara en Navlink. Button? Ska styra att lägga till i wishlist och kundkorg */}
                    <NavLink><i className="fa-light fa-heart pictureIcons"></i></NavLink>
                    <NavLink><i className="fa-light fa-bag-shopping pictureIcons pictureIconBag"></i></NavLink>
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