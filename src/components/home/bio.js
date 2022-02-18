import React from "react";
import Logos from "./logos";

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
        <Logos />
      </div>
    </div>
  );
};

export default Bio;
