import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:bakareroheet@gmail.com"
                data-cursor="disable"
              >
                bakareroheet@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/roheetbakare/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label="LinkedIn profile (connect section)"
              >
                linkedin.com/in/roheetbakare
              </a>
            </p>
            <p>
              <a
                href="https://github.com/roheetbakare"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label="GitHub profile (connect section)"
              >
                github.com/roheetbakare
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>MS Statistics<br />California State University East Bay · 2022–2024</p>
            <h4>Certifications</h4>
            <p>NLP Specialization — deeplearning.ai</p>
            <p>Deep Learning Specialization — deeplearning.ai</p>
            <p>AWS Cloud Practitioner — Amazon Web Services</p>
          </div>
          <div className="contact-box">
            <h4>Profiles</h4>
            <a
              href="https://github.com/roheetbakare"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="GitHub profile"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/roheetbakare/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="LinkedIn profile"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Roheet Bakare</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
