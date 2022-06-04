import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper";

const Wrapper = styled.section`
  height: 18rem;

  @media screen and (min-width: 500px) {
    height: 25rem;
  }

  @media screen and (min-width: 768px) {
    height: 35rem;
  }

  @media screen and (min-width: 1024px) {
    height: 50rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  width: 100%;
`;

function Hero() {
  return (
    <Wrapper>
      <StyledSwiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroImage src={require("../../images/hero1.jpg")} alt="movie" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImage src={require("../../images/hero2.jpg")} alt="movie" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImage src={require("../../images/hero3.jpg")} alt="movie" />
        </SwiperSlide>
      </StyledSwiper>
    </Wrapper>
  );
}

export default Hero;
