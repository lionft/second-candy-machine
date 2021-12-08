import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/information.css";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
const Information = () => {
  return (
    <div id="informationComponent">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img src={image1} alt="" className="infoImg" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">Title</h1>
              <p className="infoPara">
                The 3 roles we plan to add are @Gorilla Recruit, @Gorilla
                Soldier, and @Gorilla General. The Gorilla Recruits will have
                access to all of the private channels and will be able to climb
                up the ranks if they so desire. The Gorilla Soldiers will have
                to prove their loyalty to the other troops by giving away
                helpful information to the other members, we will be monitoring
                the chat to find the most big brain and helpful members. There
                can only be one Gorilla General, the General will be rewarded
                1-5 Sol a week as long as they remain in power, for a general to
                remain in power they will have to work harder and smarter than
                the soldiers in the troop. We will be monitoring the chat to see
                whose alpha is on point and every week I will evaluate the top
                three Gorilla Soldiers and put a poll up to see who is the
                biggest brain Gorilla.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">Title</h1>
              <p className="infoPara">
                The amount of Solana the Gorilla General gets is based on the
                Solana made inside the Troops Lounge. If we see the majority of
                the gorilla recruits/soldiers living large eating bananas then
                the payout will be 5 Solana. If only select troops are eating
                but the alpha is still powerful then a payout of 2-4 Solana. If
                hardly any members are winning then the Gorilla General will get
                a payout of 1 Sol. If a Gorilla General remains in power for
                over 4 weeks straight then we will give them the option of
                giving 4 of the soldiers of their choice 1 Solana each that the
                Gorilla Overlord will pay for using the royalties on the
                secondary market.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img src={image2} alt="" className="infoImg" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img src={image3} alt="" className="infoImg" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">Title</h1>
              <ul>
                <li>@Gorilla Recruit = All Holders</li>
                <li>@Gorilla Soldier = Top 20</li>
                <li> Recruits @Gorilla General = Top Soldier</li>
              </ul>
              <p className="infoPara">
                We also have some other big things coming for the Gorilla
                Discord and Troops but our goal is too under promise and over
                deliver, at this point the only guarantee we can make is the
                alpha group.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Information;
