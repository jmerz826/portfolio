import React from "react";
import styled from "styled-components";
import projects from "../../data/projects";
import HomeProject from "./homeProject";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
`;

const HomeProjects = (props) => {
  return (
    <StyledDiv>
          {projects.map(proj => {
              return <HomeProject project={proj} />
          })}
    </StyledDiv>
  );
};

export default HomeProjects;
