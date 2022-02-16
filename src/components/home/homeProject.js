import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const HomeProject = (props) => {
    const { project } = props;
  return (
    <StyledDiv>
          <h2>{project.name}</h2>
          <img src={project.image}/>
    </StyledDiv>
  );
};

export default HomeProject;
