import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/information.css";
import infoImage from "../assets/image3.png";

const Information = () => {
  return (
    <div id="informationComponent">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img src={infoImage} alt="" className="infoImg" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">Title</h1>
              <p className="infoPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci maxime eaque eius repellendus officiis, ut ab magni
                error magnam hic ipsa, ea tenetur porro ipsam sequi corrupti
                rem, placeat excepturi!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">Title</h1>
              <p className="infoPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci maxime eaque eius repellendus officiis, ut ab magni
                error magnam hic ipsa, ea tenetur porro ipsam sequi corrupti
                rem, placeat excepturi!
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img src={infoImage} alt="" className="infoImg" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img src={infoImage} alt="" className="infoImg" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">Title</h1>
              <p className="infoPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci maxime eaque eius repellendus officiis, ut ab magni
                error magnam hic ipsa, ea tenetur porro ipsam sequi corrupti
                rem, placeat excepturi!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Information;
