import React from "react";
import styled from "styled-components";
import headshot from "../../images/linkedinPhoto.jpg";
import HomeProjects from "./homeProjects";

const StyledHomePage = styled.div`
  overflow-x: hidden;
  #content-container {
    display: flex;
    text-align: center;

    h2 {
      margin-top: 2%;
    }
  }
  #about-me {
    background-color: navy;
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
      margin: 0 10%;
    }
    h3 {
      font-style: italic;
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
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="ticker-wrap">
        <div className="ticker">
          <h1>Welcome.</h1>
        </div>
      </div>
      <div id="content-container">
        <div id="about-me">
          <h2>About Me</h2>
          <img src={headshot} alt="headshot" id="headshot" />
          <h3>My name is John, and I am an engineer at heart.</h3>
          <p>
            I posess a bachelor's degree in mechanical engineering, and am
            currently studying full stack web development at{" "}
            <a
              href="https://www.bloomtech.com/courses/full-stack-web-development"
              target={"_blank"}
              rel="noreferrer"
            >
              Bloom Institute of Technology
            </a>
            . I am passionate about development because the field is constantly
            evolving, and there never a shortage of new things to learn.
          </p>
        </div>
        <div id="projects-container">
          <h2>Projects</h2>
          <HomeProjects />
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
