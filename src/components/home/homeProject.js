import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        border-radius: 24px;
    }
`;

const HomeProject = (props) => {
    const { project } = props;
  return (
    <StyledDiv>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name + ' screenshot'}/>
    </StyledDiv>
  );
};

export default HomeProject;
