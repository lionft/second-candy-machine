import React from "react";
import "../styles/roadmap.scss";
import roadmapImage from "../assets/0.png";
import { Container, Row, Col } from "react-bootstrap";

const Roadmap = () => {
  return (
    <div id="roadmapComponent">
      <h1 id="roadmapTitle">Roadmap</h1>
      <h2 className="phaseTitle">Phase 1</h2>
      <p className="roadPara">Generate Artwork for 400 Gorillas</p>{" "}
      <p className="roadPara">Launch Twitter</p>{" "}
      <p className="roadPara">Launch Discord</p>{" "}
      <p className="roadPara">
        Release the 400 Gorillas via a Stealth Launch sometime between December
        9th at 10:00 PM UTC and December 12th at 10:00 PM UTC.
      </p>
      <h2 className="phaseTitle">Phase 2</h2>
      <p className="roadPara">
        Add Grape Verification to the Discord Server.
      </p>{" "}
      <p className="roadPara">
        Implement new roles for the gorilla holders/soldiers and begin the
        process of creating the most powerful alpha group on Solana.
      </p>{" "}
      <p className="roadPara">Launch Discord</p>{" "}
      <p className="roadPara">Get listed on Moonrank and Magic Eden</p>
    </div>
  );
};

export default Roadmap;
