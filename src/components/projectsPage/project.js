import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 2%;
  border: 4px solid red;
  border-radius: 3rem;
  padding: 1%;
  img {
    width: 80%;
    border-radius: inherit;
  }
  .tools {
    display: flex;
  }
`;

const Project = (props) => {
  const { project } = props;
  const { id, name, description, tools, live_link, github_link, image, time } =
    project;
  return (
    <StyledDiv id={id}>
      <h3>{name}</h3>
      <img src={image} alt={name + "screenshot"} />
      <div className="project-detail-section description">
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className="project-detail-section tools">
        <h3>Tools:</h3>
        {!!tools.frontend.length && (
          <div>
            <ul>
              <h4>Frontend</h4>
              {tools.frontend.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </div>
        )}
        {!!tools.backend.length && (
          <div>
            <ul>
              <h4>Backend</h4>
              {tools.backend.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

export default Project;
