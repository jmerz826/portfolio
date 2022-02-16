import React, {useState} from "react";
import styled from "styled-components";
import projects from "../../data/projects";
import HomeProject from "./homeProject";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomeProjects = (props) => {
    const [activeProject, setActiveProject] = useState(0)
  return (
    <StyledDiv>
          {projects.map(proj => {
              return <HomeProject project={proj} activeProject={activeProject}/>
          })}
    </StyledDiv>
  );
};

export default HomeProjects;
