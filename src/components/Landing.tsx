import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/landing.css";
import image from "../assets/WONDER-WOMAN-Main2.png";

const Landing = () => {
  return (
    <div id="landingComponent">
      <Container>
        <Row>
          <Col xs={6} md={6} sm={6} xl={6} lg={6} xxl={6}>
            <div id="landingText">
              <h1 id="landingTitle">This is a title</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                dolorem tempore autem repudiandae voluptatibus id? Voluptas
                expedita dolor debitis deserunt obcaecati illum odit soluta
                aliquam enim veritatis, odio quaerat impedit?
              </p>
            </div>
          </Col>
          <Col xs={6} md={6} sm={6} xl={6} lg={6} xxl={6}>
            <div id="landingImgContainer">
              <img id="landingImg" src={image} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
