import React from "react";
import styled from "styled-components";
import linkIcon from "../../images/link.png";

const StyledDiv = styled.div`
  margin: 2%;
  border: 4px solid red;
  border-radius: 3rem;
  padding: 1%;
  img {
    width: 100%;
    border-radius: inherit;
    box-shadow: 5px 5px 10px black;
    :hover {
      filter: blur(6px);
      opacity: 0.56;
      cursor: pointer;
    }
  }
  .big-proj-img {
    margin: 1% auto;
    width: 65%;
    background-size: 16%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .tools {
    display: flex;
    justify-content: center;
    div {
      margin: 0 2%;
    }
  }
  p {
    margin: 0 12.5%;
  }
`;

const Project = (props) => {
  const { project } = props;
  const { id, name, description, tools, live_link, github_link, image, time } =
    project;
  return (
    <StyledDiv id={id}>
      <h3>{name}</h3>
      <div
        className="big-proj-img"
        style={{ backgroundImage: `url(${linkIcon})` }}
      >
        <img src={image} alt={name + "screenshot"} />
        {/* <img src={linkIcon} alt="link" id="link-icon"/> */}
      </div>
      <div className="project-detail-section description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className="project-detail-section">
        <h3>Tools</h3>
        <div className="tools">
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
      </div>
      <div className="project-detail-section">
        <p>Project active {time}</p>
      </div>
    </StyledDiv>
  );
};

export default Project;
