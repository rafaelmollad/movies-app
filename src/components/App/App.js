// Libraries
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// Components
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import MoviesList from "../MoviesList/MoviesList";

// Styles
const Wrapper = styled.div`
  padding: 3rem;
`;

const endpoints = [
  "https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1",
  "https://api.themoviedb.org/3/trending/movie/day?api_key=",
  "https://api.themoviedb.org/3/movie/top_rated?api_key=&language&language=en-US&page=1",
  "https://api.themoviedb.org/3/movie/upcoming?api_key=&language=en-US&page=1",
];

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread(
          (
            { data: popular },
            { data: trending },
            { data: topRated },
            { data: upcoming }
          ) => {
            setMovies([
              popular.results,
              trending.results,
              topRated.results,
              upcoming.results,
            ]);
          }
        )
      )
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Hero />

      {movies.length > 0 && (
        <>
          <MoviesList movies={movies[0]} category="Popular" />
          <MoviesList movies={movies[1]} category="Trending" />
          <MoviesList movies={movies[2]} category="Top Rated" />
          <MoviesList movies={movies[3]} category="Upcoming" />
        </>
      )}
    </Wrapper>
  );
}

export default App;
