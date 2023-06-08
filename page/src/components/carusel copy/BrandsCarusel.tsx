import React from "react";
import Carousel from "react-material-ui-carousel";
import BrandSlider from "../../Helpers/slider/brandsslider.json";
import BrandsCaruselItem from "./BrandsCaruselItem";

function BrandsCarusel() {
  return (
    <Carousel>
      {BrandSlider.map((item) => (
        <BrandsCaruselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
export default BrandsCarusel;
