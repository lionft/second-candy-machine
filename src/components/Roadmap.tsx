import React from "react";
import "../styles/roadmap.css";
import roadmapImage from "../assets/0.png";
import { Container, Row, Col } from "react-bootstrap";

const Roadmap = () => {
  return (
    <div id="roadmapComponent">
      <h1 className="roadmapTitle">Roadmap</h1>
      {/* <p className="roadmapPara">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aut
        quidem similique quas eius veniam aliquid aspernatur, iste ratione?
        Facilis commodi explicabo nostrum nesciunt earum debitis accusamus quos
        dolore voluptatem.
      </p> */}
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div id="roadmapContainer">
              <div className="roadmapItem">
                <h1 className="roadmapTitle">Phase 1</h1>
                <Container>
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                      <p className="roadmapPara">
                        Generate Artwork for 400 Gorillas
                      </p>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                      <p className="roadmapPara">Launch Twitter</p>
                    </Col>{" "}
                  </Row>
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                      <p className="roadmapPara">Launch Discord</p>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                      <p className="roadmapPara">
                        Release the 400 Gorillas via a Stealth Launch sometime
                        between December 9th at 10:00 PM UTC and December 12th
                        at 10:00 PM UTC.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>{" "}
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div id="roadmapImgContainer">
                  <img src={roadmapImage} alt="" id="roadmapImg" />
                </div>
              </Col>
              <div className="roadmapItem">
                <h1 className="roadmapTitle">Phase 2</h1>
                <Container>
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                      <p className="roadmapPara">
                        Add Grape Verification to the Discord Server.
                      </p>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                      <p className="roadmapPara">
                        Implement new roles for the gorilla holders/soldiers and
                        begin the process of creating the most powerful alpha
                        group on Solana.
                      </p>
                    </Col>{" "}
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                      <p className="roadmapPara">
                        Get listed on Moonrank and Magic Eden
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Roadmap;
