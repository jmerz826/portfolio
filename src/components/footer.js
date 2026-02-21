import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  p {
    color: #888;
    font-size: 0.8125rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Built by John Merz with React</p>
    </StyledFooter>
  );
};

export default Footer;
