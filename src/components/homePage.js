import React from "react";

const HomePage = () => {
  return (
    <div>
      <h2>Welcome.</h2>
      <div id="content-container">
        <div id="about-me">
          <h3>About Me</h3>
          <p>My name is John, and I am an engineer at heart. I posess a bachelor's degree in mechanical engineering, and am currently studying full stack web development at <a href="https://www.bloomtech.com/courses/full-stack-web-development" target={'_blank'} rel="noreferrer">Bloom Institute of Technology</a>. I am passionate about development because the field is constantly evolving, and there never a shortage of new things to learn.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;