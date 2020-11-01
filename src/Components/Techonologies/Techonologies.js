import React from "react";
import "./style.css";

import HTML5Icon from "../../images/tehnologies/html5.png";
import CSS3Icon from "../../images/tehnologies/css3.png";
import JavaScriptIcon from "../../images/tehnologies/javascript.png";
import ReactIcon from "../../images/tehnologies/react.png";
import VueIcon from "../../images/tehnologies/vue.png";
import FirebaseIcon from "../../images/tehnologies/firebase.png";
import PHPIcon from "../../images/tehnologies/php.png";
import MySQLIcon from "../../images/tehnologies/mysql.png";
import ResponsiveIcon from "../../images/tehnologies/responsive.png";

const Tehnologies = () => {
  return (
    <div id="techonologies" className="tehnoclogies-wrapper">
      <h1 id="tehnologies">Technologies</h1>
      <div className="wrapper">
        <div id="html5" className="slide">
          <img src={HTML5Icon} alt="HTML5" />
        </div>
        <div className="slide">
          <img src={CSS3Icon} alt="CSS3" />
        </div>
        <div className="slide">
          <img src={JavaScriptIcon} alt="JavaScript" />
        </div>
        <div className="slide">
          <img src={ReactIcon} alt="React" />
        </div>
        <div className="slide">
          <img src={VueIcon} alt="Vue" />
        </div>
        <div className="slide">
          <img src={FirebaseIcon} alt="Firebase" />
        </div>
        <div className="slide">
          <img src={PHPIcon} alt="PHP" />
        </div>
        <div className="slide">
          <img src={MySQLIcon} alt="MySQL" />
        </div>
        <div className="slide">
          <img src={ResponsiveIcon} alt="Responsive" />
        </div>
      </div>
      <div className="filterIcons-wrapper">
        <div className="filterIcons"></div>
        <div className="noFilterIcons"></div>
        <div className="filterIcons"></div>
      </div>
    </div>
  );
};

export default Tehnologies;
