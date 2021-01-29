import React from "react";

import TeslaEatsImg from "../../images/projects/teslaeats.png";
import RentACarImg from "../../images/projects/rentACar.png";
import AlectoDesign from "../../images/projects/alectoDesign.png";
import ChatRoomImg from "../../images/projects/chatRoom.png";
import MovieSearchImg from "../../images/projects/movieSearch.png";
import BetexpertImg from "../../images/projects/betexpert.png";
import VueTodoImg from "../../images/projects/vueTodo.png";
import EshopOverwatch from "../../images/projects/eshopOverwatch.png";
import GamayunBoardGame from "../../images/projects/gamayun.png";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";
const Projects = () => {
  return (
    <div id="projects" className="projects-wrapper">
      <h1>My projects:</h1>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="250"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/2MDPMHr" target="_blank" rel="noreferrer">
          <h2>Gamayun board game</h2>
          <span>
            Trivia board game build for hackaton! Online game for two to four
            players.
          </span>
          <img src={GamayunBoardGame} alt="Gamayun trivia board game" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="500"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/3nqAtiW" target="_blank" rel="noreferrer">
          <h2>E-shop Overwatch</h2>
          <span>
            Modern online shop, with modern features like Redux, Hooks, Video
            tag etc.
          </span>
          <img src={EshopOverwatch} alt="Eshop Overwatch" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="250"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/3nqAtiW" target="_blank" rel="noreferrer">
          <h2>Tesla Eats</h2>
          <span>
            Practical app for creating polls where to eat and order food, inside
            company, with excel export of order.
          </span>
          <img src={TeslaEatsImg} alt="Tesla Eats" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="500"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/3edy5IK" target="_blank" rel="noreferrer">
          <h2>Rent a car</h2>
          <span>
            React app using Firebase. Insert, edit or delete vehicels, customers
            and rent events.
          </span>
          <img src={RentACarImg} alt="Rent a car" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="250"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/34fVCF0" target="_blank" rel="noreferrer">
          <h2>Alecto design</h2>
          <span>Design template for one page website.</span>
          <img src={AlectoDesign} alt="Alecto design" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="500"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/2JjRLPC" target="_blank" rel="noreferrer">
          <h2>Chat Rooms</h2>
          <span>
            Live chat rooms. Choose username, change background color, filter
            messages, or delete your messages.
          </span>
          <img src={ChatRoomImg} alt="Chat Rooms" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="250"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/34fIe3C" target="_blank" rel="noreferrer">
          <h2>Movie Search</h2>
          <span>Search movie database using API requests.</span>
          <img src={MovieSearchImg} alt="Movie Search" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="500"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/34MBCKT" target="_blank" rel="noreferrer">
          <h2>BetExpert</h2>
          <span>
            Website with diffrent types of users. PHP and MySql on a backend
            side to support.
          </span>
          <img src={BetexpertImg} alt="BetExpert" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item"
        animateIn="fade"
        delay="250"
        scrollableParentSelecto="true"
      >
        <a href="https://bit.ly/3ed11R6" target="_blank" rel="noreferrer">
          <h2>Vue Todo</h2>
          <span>Vue app for your Todo list.</span>
          <img src={VueTodoImg} alt="Vue todo" />
        </a>
      </ScrollAnimation>
      <ScrollAnimation
        className="project-item comingSoon"
        animateIn="fade"
        delay="500"
        scrollableParentSelecto="true"
      >
        <h2>And more comming soon...</h2>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;
