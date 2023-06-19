import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brandsSlider from "../../../Helpers/slider/brandsSlider.json";
import { Link } from "react-router-dom";
import Card from "../../Card";
import { useDispatch } from "react-redux";
import { getBrandsProducts } from "../../../PageRedux/actions";
import { useAppSelector } from "../../../Redux/hooks";
import { getBrandProducts } from "../../../Helpers/Products";
function SimilarsCarusel({ item }: Prodact) {
  const dispatch = useDispatch();
  const { products } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const range = 10;
  const brandKind = "";
  const brandName = item;
  console.log(brandName);
  useEffect(() => {
    const getBrands = async () => {
      const { data } = await getBrandProducts(brandKind, range, brandName);
      dispatch(getBrandsProducts(data.products));
    };
    getBrands();
  }, [range, brandName, brandKind]);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Slider {...settings}>
        {products.map((item: Prodact) => {
          return (
            <div key={item.id}>
              <Card product={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SimilarsCarusel;
