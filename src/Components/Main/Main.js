import React, { useState } from "react";
import "./style.css";

import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const indicatorNumbers = [0, 1, 2, 3, 4, 5, 6];
  const slides = [
    {
      title: "Welcome to my portfolio!",
      desc: "Get to know me better...",
    },
    {
      title: "Who am I?",
      desc: "I am a highly motivated Web Developer.",
    },
    {
      title: "My goal:",
      desc: "To become recognizable in my field...",
    },
    {
      title: "And of course",
      desc: "Enjoy while doing it.",
    },
    {
      title: "My languages:",
      desc: "HTML5, CSS3, JavaScript, PHP",
    },
    {
      title: "Frameworks:",
      desc: "React, Socket.io,  Vue",
    },
    {
      title: "Databases:",
      desc: "NoSQL, MySQL, Firebase etc.",
    },
  ];

  return (
    <section
      className="main-section"
      onSlide={() =>
        sliderIndex === 6 ? setSliderIndex(0) : setSliderIndex(sliderIndex + 1)
      }
    >
      <div className="slider">
        <div className="slide-wrapper">
          <button
            className="slider_btn-prev"
            type="button"
            onClick={() =>
              sliderIndex === 0
                ? setSliderIndex(6)
                : setSliderIndex(sliderIndex - 1)
            }
          >
            {"<"}
          </button>
          {slides.map((slide, index) => (
            <div
              key={uuidv4()}
              className={`slider_slide ${
                index === sliderIndex ? "slider_slide-active" : ""
              }`}
            >
              <div className="main-title">
                <h1>{slide.title}</h1>
                <span>|</span>
              </div>
              <div className="main-desc">
                <p>
                  {slide.desc}
                  <span>|</span>
                </p>
              </div>
            </div>
          ))}
          <button
            className="slider_btn-next"
            type="button"
            onClick={() =>
              sliderIndex === 6
                ? setSliderIndex(0)
                : setSliderIndex(sliderIndex + 1)
            }
          >
            {">"}
          </button>
        </div>

        <div className="slider_indicator-box">
          {indicatorNumbers.map((number, index) => (
            <button
              type="button"
              key={uuidv4()}
              className={`slider_indicator ${
                number === sliderIndex ? "slider_indicator-active" : ""
              }`}
              onClick={() =>
                sliderIndex !== index ? setSliderIndex(index) : ""
              }
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
