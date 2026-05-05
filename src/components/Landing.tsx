import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <p className="landing-greeting">Hello! I'm</p>
            <h1>
              ROHEET
              <br />
              <span>BAKARE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Data Scientist &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">ML Engineer</div>
              <div className="landing-h2-2">Senior Data Scientist</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Senior Data Scientist</div>
              <div className="landing-h2-info-1">ML Engineer</div>
            </h2>
            <a
              href="#contact"
              className="landing-cta"
              data-cursor="disable"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="landing-scroll-indicator" aria-hidden="true">
          <div className="landing-scroll-line"></div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
