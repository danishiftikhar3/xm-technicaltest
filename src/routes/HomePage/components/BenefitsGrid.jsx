import { Card, Col, Row } from "antd";
import React from "react";

import "./BenefitsGrid.scss";

function BenefitsGrid() {
  return (
    <Row
      className="benefits-grid"
      gutter={32}
      justify={{ md: "center", sm: "center", xs: "center" }}
    >
      <Col
        xxl={6}
        xl={6}
        lg={6}
        md={24}
        sm={24}
        xs={24}
        className="benefits-grid__BFH"
      >
        <div className="benefits-grid__BFH__red-divider" />
        <div className="benefits-grid__BFH__title">Big. Fair. Human.</div>
        <div className="benefits-grid__BFH__desc">
          <span>
            Learn why <b>over 5 million clients choose XM</b> as their trusted
            online broker.
          </span>
        </div>
      </Col>
      <Col xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="benefits-grid__card authorised-card">
              <img
                alt="authorised"
                className="benefits-grid__card__img"
                // eslint-disable-next-line no-undef
                src={require("../../../assets/icons/authorised.png")}
              />
              <div className="benefits-grid__card__title">
                Authorised and Regulated
              </div>
              <div className="benefits-grid__card__desc">
                At XM, we adhere to all regulatory standards and are fully
                authorised and regulated by FSC.
              </div>
            </Card>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="benefits-grid__card committed-card">
              <img
                alt="committed"
                className="benefits-grid__card__img"
                // eslint-disable-next-line no-undef
                src={require("../../../assets/icons/committed.png")}
              />
              <div className="benefits-grid__card__title">
                Committed and Fair
              </div>
              <div className="benefits-grid__card__desc">
                We operate with complete transparency and adhere to the highest
                professional and ethical standards.
              </div>
            </Card>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="benefits-grid__card award-card">
              <img
                alt="award"
                className="benefits-grid__card__img"
                // eslint-disable-next-line no-undef
                src={require("../../../assets/icons/award.png")}
              />
              <div className="benefits-grid__card__title">
                Multi-Award-Winning
              </div>
              <div className="benefits-grid__card__desc">
                Over the years we have received over 40 awards for the quality
                of our products and services.
              </div>
            </Card>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="benefits-grid__card support-card">
              <img
                alt="support"
                className="benefits-grid__card__img"
                // eslint-disable-next-line no-undef
                src={require("../../../assets/icons/support.png")}
              />
              <div className="benefits-grid__card__title">24/7 Support</div>
              <div className="benefits-grid__card__desc">
                Our support agents are on hand 24/7 to answer your questions or
                assist you with any issues.
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default BenefitsGrid;
