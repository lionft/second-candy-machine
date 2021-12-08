import React from "react";
import "../styles/description.css";
import marge from "../assets/marge-1.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Description = () => {
  return (
    <div id="descriptionComponent">
      <h1 id="descTitle">This is another title</h1>
      <p id="descText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        voluptatibus soluta, dolore provident est culpa eaque nulla distinctio
        eos placeat maxime! Eveniet reiciendis aut beatae facere facilis
        deleniti unde praesentium?
      </p>
      <div id="descImages">
        <Container>
          <Row>
            <Col xs={6} md={6} sm={6} xl={3} lg={6} xxl={3}>
              <div className="descImgContainer">
                <img className="descImg" src={marge} alt="" />
              </div>
            </Col>{" "}
            <Col xs={6} md={6} sm={6} xl={3} lg={6} xxl={3}>
              <div className="descImgContainer">
                <img className="descImg" src={marge} alt="" />
              </div>
            </Col>{" "}
            <Col xs={6} md={6} sm={6} xl={3} lg={6} xxl={3}>
              <div className="descImgContainer">
                <img className="descImg" src={marge} alt="" />
              </div>
            </Col>{" "}
            <Col xs={6} md={6} sm={6} xl={3} lg={6} xxl={3}>
              <div className="descImgContainer">
                <img className="descImg" src={marge} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Description;
