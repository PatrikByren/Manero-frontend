import React from "react"

const Product = (props) => {
    return (
        <div className={`d-flex flex-column ${props.cardClass}`}>
            <div className="picture">{props.number}</div>
            <p>{props.number}</p>
        </div>
    );
};

export default Product;