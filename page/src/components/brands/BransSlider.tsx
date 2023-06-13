import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brandsSlider from "../../Helpers/slider/brandsSlider.json";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function BrandsSlider() {
  const navigate = useNavigate;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
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

export default BrandsSlider;
