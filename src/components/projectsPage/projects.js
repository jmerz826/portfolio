import React from "react";
import styled from "styled-components";
import Project from "./project";
import projects from "../../data/projects";

const StyledDiv = styled.div`
  text-align: center;
    background-color: black;
  div:nth-of-type(1) {
    margin-top: 2%;
  }
  padding-bottom: 1%;
  #projects-header{
    margin-top: 0;
    padding-top: 16px;
  }
`;

const Projects = () => {
  return (
    <StyledDiv>
      <h2 id="projects-header">Projects</h2>
      {projects.map((proj) => {
        return <Project project={proj} key={proj.id} />;
      })}
    </StyledDiv>
  );
};

export default Projects;
