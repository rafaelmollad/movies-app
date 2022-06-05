import styled from "styled-components";

const Wrapper = styled.div``;

const MovieImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

function Movie(props) {
  return (
    <Wrapper>
      <MovieImage src={props.src} alt="movie" />
    </Wrapper>
  );
}

export default Movie;
