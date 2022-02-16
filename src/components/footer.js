import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    text-align:center;
    padding: 1%;
`

const Footer = () => {
    return (
        <StyledFooter>
            <h5>⚡💻⚡ Site created exclusively by John Merz ⚡💻⚡</h5>
        </StyledFooter>
    );
};

export default Footer;