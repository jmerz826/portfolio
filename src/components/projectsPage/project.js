import React from "react";
import styled from "styled-components";
import linkIcon from "../../images/link.png";

const StyledDiv = styled.div`
  margin: 2%;
  border: 2px solid red;
  border-radius: 3rem;
  padding: 1%;
  img {
    border-radius: 3rem;
    box-shadow: 5px 5px 10px black;
    :hover {
      filter: blur(6px);
      opacity: 0.56;
      cursor: pointer;
    }
  }
  .big-proj-img {
    margin: 1% auto;
    width: 60%;
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
    margin: 0 20%;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-style: italic;
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
        <a href={live_link} target="_blank" rel="noreferrer">
          <img src={image} alt={name + "screenshot"} />
        </a>
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
        <a href={github_link} target="_blank" rel="noreferrer">
          GitHub🔗
        </a>
        <p>Project active {time}</p>
      </div>
    </StyledDiv>
  );
};

export default Project;
