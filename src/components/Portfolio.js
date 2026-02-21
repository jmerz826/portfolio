import React from "react";
import styled from "styled-components";
import headshot from "../images/linkedinPhoto.jpg";
import projects from "../data/projects";
import JourneyGlobe from "./JourneyGlobe";

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem;
  }
`;

const SectionLabel = styled.h2`
  color: #3b82f6;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #fff;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

/* ======================== */
/* Hero                     */
/* ======================== */

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  .hero-globe {
    flex-shrink: 0;
    width: 380px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 100px;

    .hero-globe {
      width: 300px;
      order: -1;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem;
    min-height: calc(100vh - 64px);
    padding-top: 100px;

    .hero-globe {
      width: 260px;
    }
  }
`;

const HeroContent = styled.div`
  .hero-label {
    color: #3b82f6;
    font-size: 0.9375rem;
    font-weight: 500;
    margin-bottom: 1rem;
    letter-spacing: 0.02em;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.05;
    margin-bottom: 1.5rem;

    span {
      color: #e0e0e0;
    }
  }

  .hero-description {
    color: #e0e0e0;
    font-size: 1.125rem;
    line-height: 1.7;
    max-width: 540px;
    margin-bottom: 2rem;
  }

  .hero-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      color: #e0e0e0;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s ease;
      text-decoration: none;

      &:hover {
        border-color: #3b82f6;
        color: #3b82f6;
        background-color: rgba(59, 130, 246, 0.05);
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media (max-width: 900px) {
    .hero-links {
      justify-content: center;
    }

    .hero-description {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    .hero-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    .hero-links a {
      padding: 0.5rem 1rem;
      font-size: 0.8125rem;
    }
  }
`;

/* ======================== */
/* About                    */
/* ======================== */

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: start;

  .about-photo {
    width: 180px;
    height: 180px;
    border-radius: 16px;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.08);
  }

  .about-text {
    p {
      color: #e0e0e0;
      font-size: 1.0625rem;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .education {
      margin-top: 2rem;

      h4 {
        color: #fff;
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.75rem;
      }

      .edu-item {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        .edu-name {
          color: #e0e0e0;
          font-size: 0.9375rem;
        }

        .edu-detail {
          color: #b0b0b0;
          font-size: 0.8125rem;
        }

        .edu-date {
          color: #b0b0b0;
          font-size: 0.8125rem;
          white-space: nowrap;
          margin-left: 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    .about-photo {
      width: 120px;
      height: 120px;
    }

    .education .edu-item {
      flex-direction: column;
      gap: 0.25rem;

      .edu-date {
        margin-left: 0;
      }
    }
  }
`;

/* ======================== */
/* Experience               */
/* ======================== */

const ExperienceCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  background-color: rgba(255, 255, 255, 0.04);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;

    h4 {
      color: #fff;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .exp-location {
      color: #b0b0b0;
      font-size: 0.875rem;
    }
  }

  .exp-roles {
    margin-bottom: 1.25rem;

    .role {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 0.25rem 0;
      flex-wrap: wrap;
      gap: 0.25rem;

      .role-title {
        color: #3b82f6;
        font-size: 0.9375rem;
        font-weight: 500;
      }

      .role-date {
        color: #b0b0b0;
        font-size: 0.8125rem;
      }
    }
  }

  ul {
    list-style: none;

    li {
      color: #e0e0e0;
      font-size: 0.9375rem;
      line-height: 1.7;
      padding-left: 1.25rem;
      position: relative;
      margin-bottom: 0.5rem;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.65em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #3b82f6;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    .exp-header h4 {
      font-size: 1.125rem;
    }
  }
`;

/* ======================== */
/* Skills                   */
/* ======================== */

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  h4 {
    color: #fff;
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 6px;
  font-size: 0.8125rem;
  color: #e0e0e0;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.4);
    background-color: rgba(59, 130, 246, 0.08);
    color: #3b82f6;
  }
`;

/* ======================== */
/* Projects                 */
/* ======================== */

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.04);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
  }

  h4 {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  p {
    color: #e0e0e0;
    font-size: 0.9375rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
    flex: 1;
  }

  .project-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-bottom: 1.25rem;
  }

  .project-links {
    display: flex;
    gap: 1rem;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      color: #3b82f6;
      font-size: 0.875rem;
      font-weight: 500;

      &:hover {
        color: #60a5fa;
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectToolTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.625rem;
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  font-size: 0.75rem;
  color: #3b82f6;
  font-weight: 500;
`;

/* ======================== */
/* Contact                  */
/* ======================== */

const ContactSection = styled(Section)`
  text-align: center;

  .contact-description {
    color: #e0e0e0;
    font-size: 1.0625rem;
    max-width: 500px;
    margin: 0 auto 2.5rem;
    line-height: 1.7;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      color: #e0e0e0;
      font-size: 0.9375rem;
      font-weight: 500;
      transition: all 0.2s ease;
      text-decoration: none;

      &:hover {
        border-color: #3b82f6;
        color: #3b82f6;
        background-color: rgba(59, 130, 246, 0.05);
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

/* ======================== */
/* Divider                  */
/* ======================== */

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  max-width: 1100px;
  margin: 0 auto;
`;

/* ======================== */
/* Component                */
/* ======================== */

const skillsData = [
  {
    category: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "HTML",
      "CSS",
      "Python",
      "SQL",
      "SOQL",
      "MATLAB",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Webpack",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "i18next",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "CodeIgniter",
      "TypeORM",
      "Prisma",
      "tRPC",
      "Postgres",
      "MySQL",
      "Redis",
    ],
  },
  {
    category: "Technologies",
    items: [
      "Splunk",
      "AWS",
      "Git",
      "Jenkins",
      "Docker",
      "Vault",
      "Nomad",
      "Grafana",
      "Kubernetes",
      "Jest",
      "Vitest",
      "Selenium",
      "WordPress",
    ],
  },
];

const Portfolio = () => {
  return (
    <main>
      {/* Hero */}
      <HeroSection>
        <HeroContent>
          <p className="hero-label">Software Engineer</p>
          <h1>
            John Merz
            <br />
            <span>Building for the web.</span>
          </h1>
          <p className="hero-description">
            Software Engineer II & Team Lead at Qualtrics. I build scalable web
            applications and lead teams to deliver impactful products.
          </p>
          <div className="hero-links">
            <a
              href="https://github.com/jmerz826"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-merz/"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:jmerz826@gmail.com">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </div>
        </HeroContent>
        <div className="hero-globe">
          <JourneyGlobe />
        </div>
      </HeroSection>

      <Divider />

      {/* About */}
      <Section id="about">
        <SectionLabel>About</SectionLabel>
        <SectionTitle>A bit about me</SectionTitle>
        <AboutGrid>
          <img
            src={headshot}
            alt="John Merz"
            className="about-photo"
          />
          <div className="about-text">
            <p>
              I'm a software engineer based in Seattle, WA with a background in
              mechanical engineering. After earning my B.S. from RPI and working
              as an engineer in New York, I made the leap to software development
              — and haven't looked back.
            </p>
            <p>
              At Qualtrics, I've grown from Software Engineer to Team Lead,
              where I manage an engineering team of 5 and drive high-impact
              projects across our web platform. I'm passionate about building
              performant, accessible, and user-focused applications.
            </p>
            <div className="education">
              <h4>Education</h4>
              <div className="edu-item">
                <div>
                  <span className="edu-name">
                    Rensselaer Polytechnic Institute (RPI)
                  </span>
                  <br />
                  <span className="edu-detail">
                    B.S. Mechanical Engineering
                  </span>
                </div>
                <span className="edu-date">Aug 2016 — May 2019</span>
              </div>
              <div className="edu-item">
                <div>
                  <span className="edu-name">BloomTech</span>
                  <br />
                  <span className="edu-detail">
                    Full Stack Web Development
                  </span>
                </div>
                <span className="edu-date">Sept 2021 — April 2022</span>
              </div>
            </div>
          </div>
        </AboutGrid>
      </Section>

      <Divider />

      {/* Experience */}
      <Section id="experience">
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle>Where I've worked</SectionTitle>

        <ExperienceCard>
          <div className="exp-header">
            <h4>Qualtrics</h4>
            <span className="exp-location">Seattle, WA</span>
          </div>
          <div className="exp-roles">
            <div className="role">
              <span className="role-title">
                Software Engineer II, Team Lead
              </span>
              <span className="role-date">March 2024 — Present</span>
            </div>
            <div className="role">
              <span className="role-title">Software Engineer</span>
              <span className="role-date">April 2022 — March 2024</span>
            </div>
          </div>
          <ul>
            <li>
              Managed stakeholder expectations, reviewed technical scoping, and
              provided guidance to an engineering team of 5
            </li>
            <li>
              Architected and executed a multi-quarter PHP to Node.js migration
              with no downtime and 70% latency decrease
            </li>
            <li>
              Implemented Redis cache for web API service, leading to upwards of
              50% latency reduction in select API calls
            </li>
            <li>
              Created and deployed multi-site header, increasing cross-site
              traffic by 450% within two weeks of implementation
            </li>
            <li>
              Led multi-quarter effort to meet WCAG 2.1 compliance, and provided
              accessibility training to team members
            </li>
            <li>
              Improved on-call alerting and monitoring by adding Splunk and
              Grafana dashboards/SLOs for 5xx error rates
            </li>
          </ul>
        </ExperienceCard>

        <ExperienceCard>
          <div className="exp-header">
            <h4>MG Engineering</h4>
            <span className="exp-location">New York, NY</span>
          </div>
          <div className="exp-roles">
            <div className="role">
              <span className="role-title">
                Plumbing & Fire Protection Designer
              </span>
              <span className="role-date">May 2019 — Sept 2020</span>
            </div>
          </div>
          <ul>
            <li>
              Worked directly on design of domestic/fire water and gas systems
              for over 30 high-rise buildings
            </li>
            <li>
              Performed 2D & 3D modeling daily for design coordination, visual
              presentation, and construction purposes
            </li>
          </ul>
        </ExperienceCard>
      </Section>

      <Divider />

      {/* Skills */}
      <Section id="skills">
        <SectionLabel>Skills</SectionLabel>
        <SectionTitle>Technologies I work with</SectionTitle>
        <SkillsGrid>
          {skillsData.map((group) => (
            <SkillCategory key={group.category}>
              <h4>{group.category}</h4>
              <div className="tags">
                {group.items.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Section>

      <Divider />

      {/* Projects */}
      <Section id="projects">
        <SectionLabel>Projects</SectionLabel>
        <SectionTitle>Things I've built</SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="project-tools">
                {project.tools.map((tool) => (
                  <ProjectToolTag key={tool}>{tool}</ProjectToolTag>
                ))}
              </div>
              <div className="project-links">
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Source
                  </a>
                )}
                {project.live_link && (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>

      <Divider />

      {/* Contact */}
      <ContactSection id="contact">
        <SectionLabel>Contact</SectionLabel>
        <SectionTitle>Get in touch</SectionTitle>
        <p className="contact-description">
          I'm always open to new opportunities and conversations. Feel free to
          reach out through any of the channels below.
        </p>
        <div className="contact-links">
          <a href="mailto:jmerz826@gmail.com">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            jmerz826@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/john-merz/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/jmerz826"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </ContactSection>
    </main>
  );
};

export default Portfolio;
