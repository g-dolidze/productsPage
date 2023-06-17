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
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sales = JSON.parse(localStorage.getItem("sales") as string);
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Slider {...settings}>
        {sales.map((item: Prodact) => {
          return (
            <div key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.images[0]} width={"90%"} />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductsCarusel;
