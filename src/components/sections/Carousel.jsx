import React from "react";
import CarouselsItem from "../individuals/CarouselsItem";
import ShowcaseItem from "../individuals/ShowcaseItem";

<sections />;

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="displaywelcome">
            <CarouselsItem
              headline1="Welcome To"
              headline2="Manero!"
              content="Labore sunt culpa excepteur culpa ipsum. "
              content2="Labore occaecat ex nisi mollit."
            />
          </div>
          <div className="displaypages"><ShowcaseItem/></div>
        </div>
        <div className="carousel-item">
          <div className="displaywelcome">
            <CarouselsItem
              headline1="Easy Track"
              headline2="Order!"
              content="Labore sunt culpa excepteur culpa ipsum. "
              content2="Labore occaecat ex nisi mollit."
            />
          </div>
          <div className="displaypages"><ShowcaseItem/></div>
        </div>
        <div className="carousel-item">
          <div className="displaywelcome">
            <CarouselsItem
              headline1="Door To Door"
              headline2="Delivery!"
              content="Labore sunt culpa excepteur culpa ipsum. "
              content2="Labore occaecat ex nisi mollit."
            />
          </div>
          <div className="displaypages"><ShowcaseItem/></div>
        </div>
      </div>
      <button
        className="carousel-control-prev carouselbtn"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carouselbtn"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
