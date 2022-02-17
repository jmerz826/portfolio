import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  background-color: rgb(37, 37, 37);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 10%;
  border: 2px solid white;
  border-radius: 24px;
  padding: 2%;

  img {
    border-radius: 24px;
  }

  a {
    text-decoration: none;
    font-style: italic;
    display: block;
  }
`;

const HomeProject = (props) => {
  const { project, activeProject } = props;
  const { id, name, description, tools, live_link, github_link, image, time } =
    project;

  return (
    <StyledDiv>
      <h2>{name}</h2>
      <img src={image} alt={name + " screenshot"} />
      {activeProject === id && (
        <div>
          <h3>Description: {description}</h3>
          <a href={live_link} target="_blank" rel="noreferrer">
            Check it out! 🔗
          </a>
          <a href={github_link} target="_blank" rel="noreferrer">
            Project GitHub🔗
          </a>
          <h3>Development period: {time}</h3>
          <Link to='/projects'>Learn more!</Link>
        </div>
      )}
    </StyledDiv>
  );
};

export default HomeProject;
