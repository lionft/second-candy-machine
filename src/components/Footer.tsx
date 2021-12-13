import React from "react";
import "../styles/footer.css";
import discordIcon from "../assets/discord.svg";
import youtubeIcon from "../assets/youtube1.svg";
import instaIcon from "../assets/insta.svg";
import twitterIcon from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div id="footerComponent">
      <p id="footerPara">Grumpy Gorilla Gang</p>
      <a href="https://discord.com/invite/f9Ps6hY8qF" target="_blank">
        <img src={discordIcon} alt="" />
      </a>
      <a href="https://twitter.com/GorillaAlphaNFT" target="_blank">
        <img src={twitterIcon} alt="" />
      </a>
      {/* <img src={youtubeIcon} alt="" />
      <img src={instaIcon} alt="" /> */}
    </div>
  );
};

export default Footer;
