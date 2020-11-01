import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="copyright-text">
      Copyright &copy;
      {new Date().getFullYear()} All rights reserved | Nebojsa Markovic
    </div>
  );
};

export default Footer;
