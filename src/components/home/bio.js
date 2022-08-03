import React from "react";
import Logos from "./logos";
import QualtricsImg from '../../images/Qualtrics.png';

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
        I am currently
        working as a web developer at{" "}
        <a
          href="https://www.qualtrics.com/"
          target={"_blank"}
          rel="noreferrer"
        >
          Qualtrics
        </a>
        , and I absolutely love what I do.  While my background is in Mechanical Engineering, I don't regret for a second opting to shift my focus to software development.
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
              style={{ border: "2px solid black" }}
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
      <div className="experience">
        <h3 className="section-head">Experience</h3>
        <div id='qualtrics'>
          <img src={QualtricsImg} alt='qualtrics logo'
            style={{
              width: '50%', borderRadius: '50%',
            border:'2px solid black',  marginTop: '1rem'
            }} />
          <h4 style={{ marginTop: '2%', fontStyle: 'italic' }}>Web Developer @ Qualtrics</h4>
          <h5 style={{ fontStyle: 'italic', marginTop: '1%' }}>April 2022 - Present</h5>
          <p>I'm currently working at Qualtrics as a part of the DSX (Digital Support Experience) team! This team is a part of the broader Public Platform Engineering team, and focuses on support sites and resources used by both customers and fellow employees, alike!</p>
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
