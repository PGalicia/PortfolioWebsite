import React from "react"; // React
import "./../../../scss/profileOverview.scss"; // SCSS
import Profile from "./../../../assets/profile.jpg"; // Asset
import Github from "./../../../assets/icons/github.svg"; // Asset
import Instagram from "./../../../assets/icons/instagram.svg"; // Asset
import LinkedIn from "./../../../assets/icons/linkedin.svg"; // Asset
import Telegram from "./../../../assets/icons/telegram.svg"; // Asset

const ProfileOverview = props => {
  return (
    <section className="profile-overview-container">
      <div className="image-container">
        <img src={Profile} />
      </div>
      <div className="text-container">
        <h2>Say hi.</h2>
        <h3>galicia.patrick@gmail.com</h3>
        <p>
          Hi, I’m <span>Patrick Galicia</span>, an{" "}
          <span>aspiring full stack developer</span> based in Los Angeles,
          California, currently building the web application for a men rental
          apparel startup,
          <span> APRL</span>. The foundation of my career was shaped with a
          bachelors in software engineering and still continuously learning all
          of its nuances, be it the best practices or wherever my curiosity
          drives me.
        </p>

        <div className="external-link-about">
          <a href="https://github.com/PGalicia" target="_blank">
            <img className="icon" id="github" src={Github} />
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-galicia/"
            target="_blank"
          >
            <img className="icon" id="instagram" src={LinkedIn} />
          </a>
          <a href="mailto:galicia.patrick@gmail.com">
            <img className="icon" id="email" src={Telegram} />
          </a>
          <a href="https://www.instagram.com/_patrickortreat/" target="_blank">
            <img className="icon" id="linkedin" src={Instagram} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
