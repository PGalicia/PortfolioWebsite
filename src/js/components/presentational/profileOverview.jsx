import React from "react"; // React
import Profile from "./../../../assets/profile.jpg"; // Asset
import Github from "./../../../assets/icons/github.svg"; // Asset
import Instagram from "./../../../assets/icons/instagram.svg"; // Asset
import LinkedIn from "./../../../assets/icons/linkedin.svg"; // Asset
import Telegram from "./../../../assets/icons/telegram.svg"; // Asset

const ProfileOverview = props => {
  return (
    <section className="profile">
      <div className="profile__image image-container">
        <img src={Profile} />
      </div>
      <div className="profile__texts">
        <h2 className="profile__header">Say hi.</h2>
        <h3 className="profile__email">galicia.patrick@gmail.com</h3>
        <p className="profile__statement">
          Hi, I’m{" "}
          <strong>
            <span className="profile__span">Patrick Galicia</span>
          </strong>
          , an{" "}
          <span className="profile__span">aspiring full stack developer</span>{" "}
          based in Los Angeles, California, currently building the web
          application for a men rental apparel startup,
          <span className="profile__span"> APRL</span>. The foundation of my
          career was shaped with a bachelors in software engineering and still
          continuously learning all of its nuances, be it the best practices or
          wherever my curiosity drives me.
        </p>

        <div className="profile__link">
          <a href="https://github.com/PGalicia" target="_blank">
            <img className="profile__icon" id="github" src={Github} />
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-galicia/"
            target="_blank"
          >
            <img className="profile__icon" id="instagram" src={LinkedIn} />
          </a>
          <a href="mailto:galicia.patrick@gmail.com">
            <img className="profile__icon" id="email" src={Telegram} />
          </a>
          <a href="https://www.instagram.com/pat.on.theback/" target="_blank">
            <img className="profile__icon" id="linkedin" src={Instagram} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
