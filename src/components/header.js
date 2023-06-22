import { Link } from "react-router-dom";
import styled from "styled-components";
// import './../index.css';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff8000;
  padding: 1% 2%;
  color: rgb(37, 37, 37);
  border-bottom: 2px solid black;

  @media (max-width: 1627px) {
    h2 {
      width: 16% !important;
    }
  }
  @media (max-width: 1452px) {
    h2 {
      width: 18% !important;
    }
  }
  @media (max-width: 1316px) {
    h2 {
      width: 25% !important;
    }
    .links {
      width: 10% !important;
    }
  }
  @media (max-width: 1048px) {
    h2 {
      width: 30% !important;
    }
  }
  @media (max-width: 911px) {
    h2 {
      width: 35% !important;
    }
  }
  @media (max-width: 814px) {
    h2 {
      width: 40% !important;
    }
  }
  @media (max-width: 740px) {
    h2 {
      width: 50% !important;
    }
  }
  @media (max-width: 637px) {
    .links {
      width: 18% !important;
    }
    .paths {
      width: 60% !important;
      justify-content: center;
      a {
        padding: 0 2% !important;
      }
    }
  }
  @media (max-width: 583px) {
    h2 {
      font-size: 3.2rem !important;
    }
    .paths a {
      font-size: 1.25rem !important;
    }
  }
  @media (max-width: 518px) {
    h2 {
      width: max-content !important;
    }
    .links {
      width: fit-content !important;
    }
    .paths {
      flex-direction: column;
      width: min-content !important;
      text-align: center;
      align-items: center;
      a {
        width: min-content;
        padding: 0 0.5rem !important;
      }
    }
  }
  @media (max-width: 370px) {
    .links {
      flex-direction: column;
    }
  }

  h2 {
    font-family: "Yellowtail", cursive;
    font-size: 3.6rem;
    width: 14%;
    margin: 0;
  }

  .paths {
    width: 80%;
    display: flex;
    justify-content: space-around;
    a {
      color: inherit;
      text-decoration: none;
      font-size: 1.563rem;
      background-color: white;
      padding: 0.5% 4%;
      border: 2px solid rgb(37, 37, 37);
      border-radius: 9999px;
      :hover {
        color: white;
        background-color: rgb(37, 37, 37);
      }
    }
  }
  .links {
    a {
      color: inherit;
      border: none;
      /* border: 5px solid red; */
      img {
        height: 2.441rem;
      }
    }
    width: 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>John Merz</h2>
      <nav className="paths">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <nav className="links">
        <a href="https://github.com/jmerz826" target="_blank" rel="noreferrer">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1"
            alt="github icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/john-merz/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2FlinkedIn%2FlinkedIn_PNG23.png&f=1&nofb=1"
            alt="linkedin icon"
          />
        </a>
      </nav>
    </StyledHeader>
  );
};

export default Header;
