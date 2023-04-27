import Product from "../individuals/Product";
import { NavLink } from "react-router-dom";

const ProductCarousel = (props) => {
    return(
        <div className={`container g-0 ${props.carouselClass}`}>
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <NavLink to="shop" state={{ from: `${props.title}` }} className="carouselTitle">{props.title}</NavLink>
                    <NavLink className="carouselLink">view all <i className="fa-sharp fa-regular fa-chevron-right fa-xs"></i></NavLink>
                </div>
            </div>

            {/* Pröva att skriva om detta nedan med d-flex flex-wrap */}
            <div className="carouselContainer ">
                <div className="row ">
                    <div className="col ">
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;