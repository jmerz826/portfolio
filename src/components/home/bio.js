import React from "react";
import styled from "styled-components";

const StyledLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2%;
  div{
    width: 12%;
    text-transform: capitalize;
    margin: 3%;
    height: 160px;
    background-color: gold;
    position: relative;
    img {
      padding:10% 5%;
      height: 80%;
    }
    h4{
      position: absolute;
      bottom: 0;
      left:0;
      right:0;
      margin-bottom: 4%;
    }
  }
`;

const Bio = (props) => {
  const { headshot } = props;
  return (
    <div id="about-me">
      <h2>About Me</h2>
      <img src={headshot} alt="headshot" id="headshot" />
      <h3 id="personal-quote">
        My name is John, and I am an engineer at heart.
      </h3>
      <p>
        I posess a bachelor's degree in mechanical engineering, and am currently
        studying full stack web development at{" "}
        <a
          href="https://www.bloomtech.com/courses/full-stack-web-development"
          target={"_blank"}
          rel="noreferrer"
        >
          Bloom Institute of Technology
        </a>
        . I am passionate about development because the field is constantly
        evolving, and there never a shortage of new things to learn.
      </p>
      <div className="education">
        <h3 className="section-head">Education</h3>
        <div className="edu-cards">
          <div id="rpi-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/53fca85de4b073b733a01231/1523374665136-3V6HDR13ZUO1AO6MH6LS/rpi.png?format=1500w"
              alt="RPI school crest logo"
            />
            <h4>B.S., Mechanical Engineering - May 2019</h4>
            <p>
              RPI, one of the nation's top ranked STEM schools, is located in
              Troy, New York (about 10 minutes away from Albany)
            </p>
          </div>
          <div id="bloom-card">
            <img
              src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/408/original/Bloom_Institute_of_Technology_logo.png"
              alt="BloomTech logo"
            />
            <h4>Full Stack Web Development - March 2022</h4>
            <p>
              BloomTech's intensive, 6-month online web developer course is
              designed to teach students the technical and professional skills
              hiring managers need most.
            </p>
          </div>
        </div>
      </div>
      <div className="skills">
        <h3 className="section-head">Skills & Technologies</h3>
        <StyledLogos>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="react"
            />
            <h4>react</h4>
          </div>
          <div>
            <img
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
              alt="javascript"
            />
            <h4>javascript</h4>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"
              alt="css3"
            />
            <h4>css3</h4>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              alt="html5"
            />
            <h4>html5</h4>
          </div>
          <div>
            <img
              src="http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
              alt="redux"
            />
            <h4>redux</h4>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              alt="postgresql"
            />
            <h4>postgresql</h4>
          </div>
          <div>
            <img
              src="https://destatic.blob.core.windows.net/images/nodejs-logo.png"
              alt="nodejs"
            />
            <h4>nodejs</h4>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt="express"
            />
            <h4>express</h4>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
              alt="vscode"
            />
            <h4>vscode</h4>
          </div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/jest-3627087-3029495.png"
              alt="jest"
            />
            <h4>jest</h4>
          </div>
          <div>
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="git"
            />
            <h4>git</h4>
          </div>
          <div>
            <img
              src="http://assets.stickpng.com/images/58480873cef1014c0b5e48ea.png"
              alt="heroku"
            />
            <h4>heroku</h4>
          </div>
          <div>
            <img
              src="http://assets.stickpng.com/images/58480979cef1014c0b5e4901.png"
              alt="java"
            />
            <h4>java</h4>
          </div>
        </StyledLogos>
      </div>
    </div>
  );
};

export default Bio;
