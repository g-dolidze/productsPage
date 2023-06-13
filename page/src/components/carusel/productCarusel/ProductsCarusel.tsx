import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brandsSlider from "../../../Helpers/slider/brandsSlider.json";
import { Link } from "react-router-dom";
function ProductsCarusel() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Slider {...settings}>
        {brandsSlider.map((item) => {
          return (
            <div key={item.brand}>
              <Link to={`/brand?${item.brand}`}>
                <img src={item.image} width={"90%"} />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductsCarusel;
