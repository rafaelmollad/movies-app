// Libraries
import styled from "styled-components";

// Components
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import MoviesList from "../MoviesList/MoviesList";

// Styles
const Wrapper = styled.div`
  padding: 3rem;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <MoviesList category="Popular" />
      <MoviesList category="Trending" />
      <MoviesList category="Top Rated" />
      <MoviesList category="Upcoming" />
    </Wrapper>
  );
}

export default App;
