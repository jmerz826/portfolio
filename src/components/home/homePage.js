import React from 'react';
import styled from 'styled-components';
import headshot from '../../images/linkedinPhoto.jpg';
import HomeProjects from './homeProjects';
import Bio from './bio';

const StyledHomePage = styled.div`
  overflow-x: hidden;
  #content-container {
    border-top: 2px solid black;
    display: flex;
    text-align: center;
  }
  #about-me {
    background-color: #0f4c81;
    width: 60%;
    p,
    a {
      font-size: 1.25rem;
    }
    a {
      color: gold;
      text-decoration: none;
      font-style: italic;
    }
    p {
      margin: 2% 10%;
    }
    .section-head {
      text-decoration: underline;
      margin-top: 1%;
    }
    #personal-quote {
      font-style: italic;
    }
    .education {
      .edu-cards {
        display: flex;
        justify-content: space-around;
        div {
          width: 40%;
        }
      }
      padding-top: 4%;
      img {
        border-radius: 9999px;
      }
      h4 {
        margin-top: 2%;
        font-style: italic;
      }
    }
  }
  #projects-container {
    background-color: gold;
    width: 40%;
    border-left: 1px solid black;
  }
  #headshot {
    width: 40%;
    margin: 2% 0;
    border-radius: 9999px;
    border: 4px solid black;
    box-shadow: 6px 6px 8px black;
  }

  @media (max-width: 613px) {
    h2 {
      font-size: 2rem;
    }
    #about-me {
      p {
        margin: 0 1%;
      }
      h3 {
        margin: auto 1% !important;
      }
    }
  }
  @media (max-width: 498px) {
    h2 {
      font-size: 1.75rem;
    }
    #about-me {
      width: 50% !important;
    }
    #projects-container {
      width: 50% !important;
    }
  }
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <div id="content-container">
        <Bio headshot={headshot} />
        <div id="projects-container">
          <HomeProjects />
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
