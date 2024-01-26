import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProductCarousel({ productsImages }) {
  return (
    <>
      <Carousel showIndicators={false} showThumbs={false} infiniteLoop={true}>
        {productsImages.map((product, index) => (
          <div className="min-h-[12rem] flex" key={index}>
            <img src={product.image_url} alt={product.alt} />
          </div>
        ))}
      </Carousel>
    </>
  );
}
