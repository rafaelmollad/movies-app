// Libraries
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

// Styles
const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    width: auto;
    margin-bottom: 0;
  }
`;

const NavLink = styled.a`
  color: var(--gray2);
  margin-right: 1rem;

  @media screen and (min-width: 768px) {
    margin-right: 2rem;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 5px;
  font-family: inherit;
  height: 4rem;
  background: var(--gray1);
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    width: 25rem;
  }
`;

const SearchBar = styled.input`
  flex: 1;
  outline: none;
  border: none;
  color: var(--gray2);
  background: inherit;
`;

const StyledSearchIcon = styled(RiSearchLine)`
  fill: var(--gray2);
  background: inherit;
  align-self: center;
  margin-right: 0.5rem;
`;

function Header() {
  return (
    <Wrapper>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Movies</NavLink>
        <NavLink href="/">Tv Shows</NavLink>
        <NavLink href="/">My List</NavLink>
      </Nav>
      <SearchBarWrapper>
        <StyledSearchIcon />
        <SearchBar type="text" placeholder="Search for a movie or TV Show..." />
      </SearchBarWrapper>
    </Wrapper>
  );
}

export default Header;
