import React, { useRef, useState } from "react";
import AliceCarousel from "Assets/libs/react-alice-carousel/react-alice-carousel";

import Image from "next/image";

import CarouselImage from "Assets/img/sample-images/carousel-image.svg";

export default function PrimaryCarousel() {
  const { caruselRef } = useRef(null);

  const [responsive] = useState({
    0: { items: 2 },
    600: { items: 3 },
    960: { items: 4 },
  });
  return (
    <AliceCarousel
      autoPlay={false}
      autoPlayDirection="rtl"
      dotsDisabled={true}
      touchTrackingEnabled={true}
      duration={250}
      showSlideInfo={false}
      responsive={responsive}
      ref={caruselRef}
      isRTL={true}
      infinite={false}
      mouseTracking
    >
      <div className="item">
        <h1>1</h1>
      </div>
      <div className="item">
        <h1>2</h1>
      </div>
      <div className="item">
        <h1>3</h1>
      </div>
      <div className="item">
        <h1>4</h1>
      </div>
      <div className="item">
        <h1>5</h1>
      </div>
    </AliceCarousel>
  );
}
