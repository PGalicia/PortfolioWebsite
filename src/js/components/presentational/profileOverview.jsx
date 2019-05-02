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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum
          non consectetur a erat nam at. A diam sollicitudin tempor id eu nisl
          nunc. In dictum non consectetur a. Tincidunt augue interdum velit
          euismod in pellentesque. Pretium lectus quam id leo in vitae turpis
          massa sed. Ipsum suspendisse ultrices gravida dictum fusce ut. Sed
          enim ut sem viverra aliquet eget. Orci a scelerisque purus semper eget
        </p>

        <div className="external-link-about">
          <img className="icon" id="github" src={Github} />
          <img className="icon" id="linkedin" src={Instagram} />
          <img className="icon" id="instagram" src={LinkedIn} />
          <img className="icon" id="email" src={Telegram} />
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
