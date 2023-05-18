import React from "react";
import Carousel from "react-material-ui-carousel";
import CaruselItem from "./CaruselItem";
import Slider from "../../Helpers/slider/Slider.json";

function Carusel() {
  return (
    <Carousel>
      {Slider.map((item) => (
        <CaruselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
export default Carusel;
