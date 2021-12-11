import React from "react";
import "../styles/footer.css";
import discordIcon from "../assets/discord.svg";
import youtubeIcon from "../assets/youtube1.svg";
import instaIcon from "../assets/insta.svg";
import twitterIcon from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div id="footerComponent">
      <p>Grumpy Gorilla Gang</p>
      <img src={discordIcon} alt="" />
      <img src={youtubeIcon} alt="" />
      <img src={instaIcon} alt="" />
      <img src={twitterIcon} alt="" />
    </div>
  );
};

export default Footer;
