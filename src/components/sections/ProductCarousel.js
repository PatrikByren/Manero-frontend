import Product from "../individuals/Product";
import { NavLink } from "react-router-dom";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ProductCarousel = (props) => {
    return(
        <div className={`container g-0 ${props.carouselClass}`}>
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between mb-1">
                    <NavLink to="shop" state={{ from: `${props.title}` }} className="carouselTitle">{props.title}</NavLink>
                    <NavLink className="carouselLink">view all <i className="fa-sharp fa-regular fa-chevron-right fa-xs"></i></NavLink>
                </div>
            </div>

            {props.carouselClass === "bestSellerCarousel" && (
                <Splide
                    options={ {
                        perPage: 2,
                        perMove: 1,
                        height: "340px",
                        pagination: false,
                        arrows: false,
                        gap: "60px",
                        mediaQuery: "min",
                        breakpoints: {
                            1200: {
                                perPage: 6,
                                arrows: true,
                                gap: "30px",
                                width: "1300px"
                            }
                        }
                    } }
                    aria-label="My Favorite Images"
                >
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                    </SplideSlide>
                </Splide>
            )}

            {props.carouselClass === "featuredCarousel" && (
                <Splide
                options={ {
                    perPage: 2,
                    perMove: 1,
                    height: "340px",
                    pagination: false,
                    arrows: false,
                    gap: "-60px",
                    mediaQuery: "min",
                    breakpoints: {
                        1200: {
                            perPage: 8,
                            arrows: true,
                            width: "1300px",
                            gap: "10px"
                        }
                    }
                } }
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
                <SplideSlide>
                    <Product cardClass={props.cardClass} price="40.50" discountPrice="30.50" product="Black Sneakers"/>
                </SplideSlide>
            </Splide>
            )}
        </div>
    );
};

export default ProductCarousel;