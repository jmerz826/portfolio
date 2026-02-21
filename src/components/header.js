import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
  background-color: ${(props) =>
    props.$scrolled ? "rgba(17, 17, 24, 0.95)" : "transparent"};
  backdrop-filter: ${(props) => (props.$scrolled ? "blur(12px)" : "none")};
  border-bottom: ${(props) =>
    props.$scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none"};
  transition: all 0.3s ease;

  .logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.01em;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;

    a {
      color: #e0e0e0;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.2s ease;
      letter-spacing: 0.01em;

      &:hover {
        color: #fff;
      }
    }
  }

  .social-links {
    display: flex;
    gap: 0.75rem;
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 1px solid rgba(255, 255, 255, 0.1);

    a {
      color: #e0e0e0;
      transition: color 0.2s ease;
      display: flex;
      align-items: center;

      &:hover {
        color: #fff;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem;

    .mobile-toggle {
      display: block;
    }

    nav {
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      background-color: rgba(17, 17, 24, 0.98);
      backdrop-filter: blur(12px);
      flex-direction: column;
      padding: 1.5rem 2rem;
      gap: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transform: ${(props) =>
        props.$menuOpen ? "translateY(0)" : "translateY(-120%)"};
      opacity: ${(props) => (props.$menuOpen ? 1 : 0)};
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .nav-links {
      flex-direction: column;
      gap: 1rem;

      a {
        font-size: 1rem;
      }
    }

    .social-links {
      margin-left: 0;
      padding-left: 0;
      padding-top: 1rem;
      border-left: none;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <StyledHeader $scrolled={scrolled} $menuOpen={menuOpen}>
      <span className="logo">John Merz</span>

      <button
        className="mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <nav>
        <div className="nav-links">
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/jmerz826"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/john-merz/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
