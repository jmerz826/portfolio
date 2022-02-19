import React, { useState } from "react";
import styled from "styled-components";
import projects from "../../data/projects";
import HomeProject from "./homeProject";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    </StyledDiv>
  );
};

export default HomeProjects;
