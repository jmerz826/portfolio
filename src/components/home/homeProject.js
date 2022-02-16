import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 10%;
    border: 2px solid lime;
    padding: 2%;
    img{
        border-radius: 24px;
    }
`;

const HomeProject = (props) => {
    const { project, activeProject } = props;
    const { id, name, description, tools, live_link, github_link, image, time } = project;

  return (
    <StyledDiv>
          <h2>{name}</h2>
          <img src={image} alt={name + ' screenshot'} />
          {activeProject === id && 
              <h1>hi</h1>
          }
    </StyledDiv>
  );
};

export default HomeProject;
