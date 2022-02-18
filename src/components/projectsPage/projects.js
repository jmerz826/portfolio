import React from "react";
import styled from "styled-components";
import Project from "./project";
import projects from "../../data/projects";

const StyledDiv = styled.div`
    text-align: center;
`

const Projects = () => {
    return (
        <StyledDiv>
            <h2>Projects</h2>
            {projects.map(proj => {
                return <Project project={proj} key={proj.id}/>
            })}
        </StyledDiv>
    );
};

export default Projects;