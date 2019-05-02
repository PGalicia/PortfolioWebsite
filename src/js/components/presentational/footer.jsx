import React from "react"; // React
import "./../../../scss/footer.scss"; // SCSS
import Github from "./../../../assets/icons/github.svg"; // Asset
import Instagram from "./../../../assets/icons/instagram.svg"; // Asset
import LinkedIn from "./../../../assets/icons/linkedin.svg"; // Asset
import Telegram from "./../../../assets/icons/telegram.svg"; // Asset

const Footer = props => {
  return (
    <footer className="footer-container">
      <div className="external-links">
        <img className="icon" id="github" src={Github} />
        <img className="icon" id="linkedin" src={Instagram} />
        <img className="icon" id="instagram" src={LinkedIn} />
        <img className="icon" id="email" src={Telegram} />
      </div>
      <p>&copy; 2019 Patrick Galicia &bull; Please Hire Me</p>
      <p>Website Stack: HTML5, SCSS, ReactJs, Redux</p>
    </footer>
  );
};

export default Footer;
