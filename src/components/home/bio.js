import React from "react";

const Bio = (props) => {
    const { headshot } = props;
    return (
        <div id="about-me">
            <h2>About Me</h2>
            <img src={headshot} alt="headshot" id="headshot" />
            <h3>My name is John, and I am an engineer at heart.</h3>
            <p>
                I posess a bachelor's degree in mechanical engineering, and am
                currently studying full stack web development at{" "}
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
        </div>
    );
};

export default Bio;