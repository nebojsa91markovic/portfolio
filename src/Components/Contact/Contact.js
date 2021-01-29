import React from "react";

import GitHubIcon from "../../images/icons/github.png";
import LinkedinIcon from "../../images/icons/linkedin.png";
import GmailIcon from "../../images/icons/gmail.png";
import ScrollAnimation from "react-animate-on-scroll";

import "./style.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-wrapper">
      <ScrollAnimation
        className="title"
        animateIn="zoomOut"
        delay="250"
        scrollableParentSelecto="true"
      >
        <h2>How to reach me:</h2>
      </ScrollAnimation>

      <div className="mySupport">
        <ScrollAnimation
          className="support"
          animateIn="zoomOut"
          delay="500"
          scrollableParentSelecto="true"
        >
          <p>
            If you have any questions, job offers or some opinion you want to
            share or ask, don't hesitate to contact me.
          </p>
          <span>I'm exited to here from you.</span>
        </ScrollAnimation>
        <div className="contacts">
          <div className="links-wrapper">
            <ScrollAnimation
              className="link-contact"
              animateIn="fade"
              delay="750"
              scrollableParentSelecto="true"
              duration="2"
            >
              <span>Email</span>
              <span className="logo-wrapper">
                <a href="mailto:nebojsa91markovic@gmail.com">
                  <img src={GmailIcon} alt="Gmail Icon" />
                </a>
              </span>
            </ScrollAnimation>
            <ScrollAnimation
              className="link-contact"
              animateIn="fade"
              delay="1000"
              scrollableParentSelecto="true"
              duration="2"
            >
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
            </ScrollAnimation>
            <ScrollAnimation
              className="link-contact"
              animateIn="fade"
              delay="1250"
              scrollableParentSelecto="true"
              duration="2"
            >
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
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
