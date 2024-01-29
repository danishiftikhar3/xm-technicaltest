import React from "react";
import { Col, Row } from "antd";

import "./footer.scss";

function FooterContainer() {
  return (
    <div className="footer">
      <Row justify="space-between">
        <Col
          className="footer__partners-col"
          xxl={15}
          xl={15}
          lg={15}
          md={0}
          sm={0}
          xs={0}
        >
          <img
            alt="MetaQuotes"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/metaQuotes.png")}
            className="footer__metaquotes"
          />
          <img
            alt="VERISIGN"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/verisign.png")}
            className="footer__verisign"
          />
          <img
            alt="unicef"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/unicef.png")}
            className="footer__unicef"
          />
          <img
            alt="investors"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/investors.png")}
            className="footer__investors"
          />
        </Col>
        <Col
          className="footer__social-col"
          xxl={4}
          xl={4}
          lg={4}
          md={0}
          sm={0}
          xs={0}
        >
          <span className="footer__follow">Follow us on</span>
          <img
            alt="fb"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/fb.png")}
            className="footer__social-icon"
          />
          <img
            alt="x"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/x.png")}
            className="footer__social-icon"
          />
          <img
            alt="yt"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/yt.png")}
            className="footer__social-icon"
          />
          <img
            alt="ig"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/ig.png")}
            className="footer__social-icon"
          />
          <img
            alt="li"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/li.png")}
            className="footer__social-icon"
          />
        </Col>
      </Row>
      <div className="footer__divider" />
      <Row
        justify={{
          xxl: "space-between",
          xl: "space-between",
          lg: "space-between",
          md: "space-between",
          sm: "center",
          xs: "center",
        }}
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Col
          xxl={18}
          xl={18}
          lg={18}
          md={18}
          sm={24}
          xs={24}
          className="footer__text"
        >
          <a>Privacy Policy</a> | <a>Cookie Policy</a> |{" "}
          <a>Terms and Conditions</a>
        </Col>
        <Col span={4} className="footer__trading-point-logo-col">
          <img
            alt="li"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/tradingPoint-logo.png")}
            className="footer__trading-point-logo"
          />
        </Col>
      </Row>
    </div>
  );
}

export default FooterContainer;
