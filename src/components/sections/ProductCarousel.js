import Product from "../individuals/Product";
import { NavLink } from "react-router-dom";

const ProductCarousel = (props) => {
    return(
        <div className={`container mt-1 g-0 ml-1 ${props.carouselClass}`}>
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between">
                    <h2>{props.title}</h2>
                    <NavLink >View All</NavLink>
                </div>
            </div>
            <div className="carouselContainer ">
                <div className="row">
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="1"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="2"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="3"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="4"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="5"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="6"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="7"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="8"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="9"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="10"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="11"/>
                    </div>
                    <div className="col ">
                        <Product cardClass={props.cardClass} number="12"/>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default ProductCarousel;