import React from "react";
import styled from "styled-components";

// Logo imports
import reduxLogo from "../../images/logos/redux.png";
import herokuLogo from "../../images/logos/herokuLogo.png";
import javaLogo from "../../images/logos/java.png";
import reactLogo from "../../images/logos/reactLogo.png";
import jsLogo from "../../images/logos/jsLogo.png";
import cssLogo from "../../images/logos/cssLogo.png";
import htmlLogo from "../../images/logos/htmlLogo.png";
import pgLogo from "../../images/logos/pgLogo.png";
import nodeLogo from "../../images/logos/nodeLogo.png";
import expressLogo from "../../images/logos/expressLogo.png";
import vsLogo from "../../images/logos/vsLogo.png";
import jestLogo from "../../images/logos/jestLogo.png";
import gitLogo from "../../images/logos/gitLogo.png";
import tsLogo from '../../images/logos/Typescript.png';

const StyledLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2%;
  div {
    border-radius: 16px;
    border: 2px solid gold;
    width: 15%;
    text-transform: capitalize;
    margin: 2%;
    height: 160px;
    background-color: rgb(37, 37, 37);
    position: relative;
    img {
      padding: 10% 5%;
      height: 80%;
    }
    h4 {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin-bottom: 4%;
    }
  }
  @media (max-width: 1225px){
    div{
      width: 20%;
    }
  }
  @media (max-width: 1000px){
    div{
      height: 120px;
    }
  }
  @media (max-width: 950px){
    div{
      width: 25%;
    }
  }
  @media (max-width: 742px){
    div{
      width: 28%;
      h4{
        font-size: 1.25rem !important;
      }
    }
  }
  @media (max-width: 532px){
    div{
      height: 100px;
      width: 46%;
    }
  }
`;

const Logos = () => {
  return (
    <StyledLogos>
      <div>
        <img src={reactLogo} alt="react" />
        <h4>react</h4>
      </div>
      <div>
        <img src={jsLogo} alt="javascript" />
        <h4>javascript</h4>
      </div>
      <div>
        <img src={tsLogo} alt="typescript" />
        <h4>typescript</h4>
      </div>
      <div>
        <img src={cssLogo} alt="css3" />
        <h4>css3</h4>
      </div>
      <div>
        <img src={htmlLogo} alt="html5" />
        <h4>html5</h4>
      </div>
      <div>
        <img src={reduxLogo} alt="redux" />
        <h4>redux</h4>
      </div>
      <div>
        <img src={pgLogo} alt="postgresql" />
        <h4>postgresql</h4>
      </div>
      <div>
        <img src={nodeLogo} alt="nodejs" />
        <h4>nodejs</h4>
      </div>
      <div>
        <img src={expressLogo} alt="express" />
        <h4>express</h4>
      </div>
      <div>
        <img src={vsLogo} alt="vscode" />
        <h4>vscode</h4>
      </div>
      <div>
        <img src={jestLogo} alt="jest" />
        <h4>jest</h4>
      </div>
      <div>
        <img src={gitLogo} alt="git" />
        <h4>git</h4>
      </div>
      <div>
        <img src={herokuLogo} alt="heroku" />
        <h4>heroku</h4>
      </div>
      <div>
        <img src={javaLogo} alt="java" />
        <h4>java</h4>
      </div>
    </StyledLogos>
  );
};

export default Logos;
