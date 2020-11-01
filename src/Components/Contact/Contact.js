import React from "react";

import GitHubIcon from "../../images/icons/github.png";
import LinkedinIcon from "../../images/icons/linkedin.png";
import GmailIcon from "../../images/icons/gmail.png";

import "./style.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-wrapper">
      <div className="title">
        <h2>How to reach me:</h2>
      </div>

      <div className="mySupport">
        <div className="support">
          <p>
            If you have any questions, job offers or some opinion you want to
            share or ask, don't hesitate to contact me.
          </p>
          <span>I'm exited to here from you.</span>
        </div>
        <div className="contacts">
          <div className="links-wrapper">
            <div className="link-contact">
              <span>Email</span>
              <span className="logo-wrapper">
                <a href="mailto:nebojsa91markovic@gmail.com">
                  <img src={GmailIcon} alt="Gmail Icon" />
                </a>
              </span>
            </div>
            <div className="link-contact">
              <span>Linkedin</span>
              <span className="logo-wrapper">
                <a
                  href="https://www.linkedin.com/in/nebojsa-markovic-6760111b5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LinkedinIcon} alt="Linkedin Icon" />
                </a>
              </span>
            </div>
            <div className="link-contact">
              <span>GitHub</span>
              <span className="logo-wrapper">
                <a
                  href="https://github.com/nebojsa91markovic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GitHubIcon} alt="GitHub Icon" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
