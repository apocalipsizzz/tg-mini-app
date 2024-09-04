import React from "react";
import { cardData } from "../../localData/cardData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./CardSwiper.css";

export const CardSwiper = () => {
  const initialPosition = Math.round(cardData.length / 2);

  const handleSlideChange = (swiper: { slides: any; activeIndex: number }) => {
    console.log("slide change", swiper.activeIndex + 1);
    console.log("swiper", swiper);
    const selectedSlide = swiper.slides[swiper.activeIndex];
    console.log("selectedSlide", selectedSlide);
  };

  return (
    <>
      <Swiper
        effect={"cards"}
        cardsEffect={{
          perSlideOffset: 20, // Space between cards in px
          perSlideRotate: 10, // Rotation of cards in degrees
        }}
        grabCursor={true}
        initialSlide={initialPosition}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {cardData.map((card) => {
          return <SwiperSlide key={card.id}>{card.id}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};
