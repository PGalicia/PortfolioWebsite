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
        <a href="https://github.com/PGalicia" target="_blank">
          <img className="icon" id="github" src={Github} />
        </a>
        <a href="https://www.linkedin.com/in/patrick-galicia/" target="_blank">
          <img className="icon" id="instagram" src={LinkedIn} />
        </a>
        <a href="mailto:galicia.patrick@gmail.com">
          <img className="icon" id="email" src={Telegram} />
        </a>
        <a href="https://www.instagram.com/pat.on.theback/" target="_blank">
          <img className="icon" id="linkedin" src={Instagram} />
        </a>
      </div>
      <p>&copy; 2019 Patrick Galicia &bull; Please Hire Me</p>
      <p>Website Stack: HTML5, SCSS, ReactJs, Redux</p>
    </footer>
  );
};

export default Footer;
