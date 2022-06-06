// Libraries
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import Movie from "../Movie/Movie";

const Wrapper = styled.section``;

const Category = styled.h2`
  font-size: 2.5rem;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 2rem 0;

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

function MoviesList({ category, movies }) {
  return (
    <Wrapper>
      <Category>{category}</Category>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        autoHeight={true}
        spaceBetween={10}
        observer={true}
        observeParents={true}
        slidesPerView={2}
        slidesPerGroup={1}
        breakpoints={{
          // When window width is >= 500px
          500: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },

          // When window width is >= 1024px
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 2,
          },
        }}
        loop={true}
        className="mySwiper"
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <Movie
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}

export default MoviesList;
