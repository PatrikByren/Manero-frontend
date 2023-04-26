import React from "react"



const Product = (props) => {
   

    return (
        <div className={`d-flex flex-column ${props.cardClass}`}>
            <div className="picture"></div>
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