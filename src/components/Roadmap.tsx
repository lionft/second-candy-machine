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
    </div>
  );
};

export default Roadmap;
