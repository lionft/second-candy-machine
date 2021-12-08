import React from "react";
import "../styles/roadmap.css";
import roadmapImage from "../assets/0.png";
import { Container, Row, Col } from "react-bootstrap";

const Roadmap = () => {
  return (
    <div id="roadmapComponent">
      <h1 className="roadmapTitle">Roadmap</h1>
      <p className="roadmapPara">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aut
        quidem similique quas eius veniam aliquid aspernatur, iste ratione?
        Facilis commodi explicabo nostrum nesciunt earum debitis accusamus quos
        dolore voluptatem.
      </p>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div id="roadmapContainer">
              <div className="roadmapItem">
                <h1 className="roadmapTitle">Title</h1>
                <p className="roadmapPara">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  quod suscipit impedit similique neque quaerat veniam in
                  debitis aperiam assumenda adipisci architecto, maxime,
                  repellendus accusamus explicabo optio sunt alias sint.
                </p>
              </div>{" "}
              <div className="roadmapItem">
                <h1 className="roadmapTitle">Title</h1>
                <p className="roadmapPara">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  quod suscipit impedit similique neque quaerat veniam in
                  debitis aperiam assumenda adipisci architecto, maxime,
                  repellendus accusamus explicabo optio sunt alias sint.
                </p>
              </div>{" "}
              <div className="roadmapItem">
                <h1 className="roadmapTitle">Title</h1>
                <p className="roadmapPara">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  quod suscipit impedit similique neque quaerat veniam in
                  debitis aperiam assumenda adipisci architecto, maxime,
                  repellendus accusamus explicabo optio sunt alias sint.
                </p>
              </div>{" "}
              <div className="roadmapItem">
                <h1 className="roadmapTitle">Title</h1>
                <p className="roadmapPara">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  quod suscipit impedit similique neque quaerat veniam in
                  debitis aperiam assumenda adipisci architecto, maxime,
                  repellendus accusamus explicabo optio sunt alias sint.
                </p>
              </div>{" "}
              <div className="roadmapItem">
                <h1 className="roadmapTitle">Title</h1>
                <p className="roadmapPara">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  quod suscipit impedit similique neque quaerat veniam in
                  debitis aperiam assumenda adipisci architecto, maxime,
                  repellendus accusamus explicabo optio sunt alias sint.
                </p>
              </div>{" "}
              <div className="roadmapItem">
                <h1 className="roadmapTitle">Title</h1>
                <p className="roadmapPara">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  quod suscipit impedit similique neque quaerat veniam in
                  debitis aperiam assumenda adipisci architecto, maxime,
                  repellendus accusamus explicabo optio sunt alias sint.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div id="roadmapImgContainer">
              <img src={roadmapImage} alt="" id="roadmapImg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Roadmap;
