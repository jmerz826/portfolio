import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
  background-color: rgb(37, 37, 37);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5%;
  border: 1px solid lightblue;
  border-radius: 24px;
  padding: 2%;

  img {
    border-radius: 24px;
    margin: 1% 0;
  }

  a {
    text-decoration: none;
    font-style: italic;
    display: block;
    color: lightblue;
  }

  .project-details {
    margin: 2% 4%;
  }

  .project-details-section {
    display: flex;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 2%;

    .tools-list {
      display: flex;
      width: 65%;
      justify-content: space-around;
      li {
        &::before {
          content: "🔨 ";
        }
      }
      h5 {
        text-align: center;
        font-weight: bold;
      }
    }

    p,
    div {
      margin-left: 1%;
    }
    a {
      display: inline-block;
    }
  }
  .links {
    display: flex;
    justify-content: center;
    a {
      margin: 0 1%;
    }
  }

  @media (max-width: 800px) {
    .project-details-section {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const HomeProject = (props) => {
  const { project, activeProject, handleClick } = props;
  const { id, name, description, tools, live_link, github_link, image, time } =
    project;
  const { push } = useHistory();

  return (
    <StyledDiv
      onClick={() => handleClick(id)}
      onDoubleClick={() => push(`/projects#${id}`)}
    >
      <h3>{name}</h3>
      <img src={image} alt={name + " screenshot"} />
      {Number(activeProject) === id && (
        <div className="project-details">
          <div className="project-details-section">
            <h4>Description:</h4>
            <p>
              {description.slice(0, 120)}...{" "}
              <Link to={`/projects#${id}`}>See more</Link>
            </p>
          </div>
          <div className="project-details-section">
            <h4>Tools Used:</h4>
            <div className="tools-list">
              {tools.frontend.length >= 1 && (
                <ul>
                  <h5>Frontend</h5>
                  {tools.frontend
                    .map((tool) => <li key={tool}>{tool}</li>)
                    .slice(0, 3)}
                  <li>
                    <Link to={`/projects#${id}`}>See full list</Link>
                  </li>
                </ul>
              )}
              {tools.backend.length >= 1 && (
                <ul>
                  <h5>Backend</h5>
                  {tools.backend
                    .map((tool) => <li key={tool}>{tool}</li>)
                    .slice(0, 3)}
                  <li>
                    <Link to={`/projects#${id}`}>See full list</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="links">
            <Link to={`/projects#${id}`}>See project page!</Link>
            <a href={live_link} target="_blank" rel="noreferrer">
              Check out the site! 🔗
            </a>
            <a href={github_link} target="_blank" rel="noreferrer">
              Project GitHub🔗
            </a>
          </div>
          <p>Development period: {time}</p>
        </div>
      )}
    </StyledDiv>
  );
};

export default HomeProject;
