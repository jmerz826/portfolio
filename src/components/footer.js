import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 1%;
  border-top: 2px solid black;
  a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    font-style: italic;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h5>
        Let's talk! <Link to="/contact">π£π§Contact Me!π§π£</Link>
      </h5>
      <h5>β‘π»β‘ Site created exclusively by John Merz β‘π»β‘</h5>
      <a
        href="https://github.com/jmerz826/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        This Site's GitHub! π
      </a>
    </StyledFooter>
  );
};

export default Footer;
