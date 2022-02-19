import React from "react";
import styled from "styled-components";
import linkedinPhoto from "../images/linkedinPhoto.jpg";

const StyledDiv = styled.div`
  background-color: #0F4C81;
  text-align: center;

  h2 {
    padding-top: 2%;
    margin: 0;
  }

  img {
    width: 20%;
    border-radius: 9999px;
    border: 6px solid black;
    margin-top: 1%;
  }
  a {
    text-decoration: none;
    color: white;
  }
  ul{
    margin-top: 2%;
    padding-bottom: 2%;
  }
`;

const ContactPage = (props) => {
  return (
    <StyledDiv>
      <h2>Meet: John Merz</h2>
      <img src={linkedinPhoto} alt="headshot of John" />
      <h3>Full Stack Developer</h3>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/john-merz/"
            target="_blank"
            rel="noreferrer"
          >
            John's Linkedin 🔗
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jmerz826"
            target="_blank"
            rel="noreferrer"
          >
            John's GitHub 🔗
          </a>
        </li>
        <li>
          <a
            href="mailto:jmerz826@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email: jmerz826@gmail.com 📧
          </a>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default ContactPage;
