import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../Redux/hooks";
import { useLocation } from "react-router";
import { getBrandProducts } from "../../Helpers/Products";
import { getBrandsProducts } from "../../PageRedux/actions";

const SimilarItems = () => {
  const [similarItems, setSimilarItems] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [brandKind, setBrandKind] = useState("");
  const [range, setRange] = useState(10);

  const dispatch = useDispatch();
  const { products } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );
  const seeMoreBrandItems = () => {
    setRange(range + 10);
  };

  const url = useLocation();
  let urlArray = "";
  urlArray = url.search;
  let urlText = urlArray.split("");
  const brand = urlText.slice(1);
  const brandName = brand.join("");

  useEffect(() => {
    const getBrands = async () => {
      const { data } = await getBrandProducts(brandKind, range, brandName);
      dispatch(getBrandsProducts(data.products));
    };
    getBrands();
  }, [range, brandName, brandKind]);

  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SimilarItems;
