import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";
import SliderCards from "./SliderCard";

const MyCarousel = () => (
  <Carousel
    plugins={[
      "infinite",
      {
        resolve: autoplayPlugin,
        options: {
          interval: 4000,
        },
      },
    ]}
    animationSpeed={2000}
  >
    <SliderCards />
    <SliderCards />
    <SliderCards />
  </Carousel>
);

export default MyCarousel;
