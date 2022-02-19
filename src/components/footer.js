import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
    text-align:center;
    padding: 1%;
    border-top: 2px solid black;
    a{
        font-size: inherit;
        color: inherit;
        text-decoration: none;
        font-style: italic;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <h5>Let's talk! <Link to="/contact">🗣📧Contact Me!📧🗣</Link></h5>
            <h5>⚡💻⚡ Site created exclusively by John Merz ⚡💻⚡</h5>
            <Link to="https://github.com/jmerz826/portfolio" target="_blank">This Site's GitHub! 🔗</Link>
        </StyledFooter>
    );
};

export default Footer;