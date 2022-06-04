// Libraries
import styled from "styled-components";

// Components
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

// Styles
const Wrapper = styled.div`
  padding: 3rem;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
    </Wrapper>
  );
}

export default App;
