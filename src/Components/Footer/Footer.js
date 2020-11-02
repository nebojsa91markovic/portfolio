import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="copyright-text">
      Copyright &copy;
      {new Date().getFullYear()} | <span>Nebojsa Markovic</span>
    </div>
  );
};

export default Footer;
