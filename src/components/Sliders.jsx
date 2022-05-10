import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import styled from "styled-components";
import slider1 from "../assets/images/slide1.jpeg";
import slider2 from "../assets/images/slide2.jpeg";
import slider3 from "../assets/images/slide3.jpeg";
import slider4 from "../assets/images/slide4.jpeg";
import slider5 from "../assets/images/slide5.jpeg";

const imgs = [slider1, slider2, slider3, slider4, slider5];

const Container = styled.div`
  width: 100%;
  height: auto;
  .swiper {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

const Sliders = () => {
  return (
    <Container>
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        effect
        speed={800}
        slidesPerView={1}
        loop
        className="swiper"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Sliders;
