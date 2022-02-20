import React, { useState } from "react";
import styled from "styled-components";
import projects from "../../data/projects";
import HomeProject from "./homeProject";

const StyledDiv = styled.div`
height: 100%;
overflow-y: hidden;
  .projects-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
  }
`;

const HomeProjects = (props) => {
  const [activeProject, setActiveProject] = useState(0);
  const handleClick = (id) => {
    if (id) {
      if (id === activeProject) {
        setActiveProject(0);
      } else {
        setActiveProject(id);
      }
    }
  };
  return (
    <StyledDiv>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj) => {
          return (
            <HomeProject
              project={proj}
              activeProject={activeProject}
              key={proj.id}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default HomeProjects;
