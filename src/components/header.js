import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Yellowtail", cursive;
  display: flex;
  justify-content: space-between;
  background-color: darkcyan;
  padding: 1% 2%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>John Merz</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
