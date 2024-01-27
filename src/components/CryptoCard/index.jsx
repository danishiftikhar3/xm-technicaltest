import React from "react";
import { Card, Row, Col, Divider } from "antd";
// import PropTypes from "prop-types";
import "./CryptoCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CryptoCard() {
  return (
    <Card size="small" className="crypto-card">
      <Row>
        <Col span={8}>
          <img
            className="crypto-card__crypto-logo"
            alt="XM Logo"
            // eslint-disable-next-line no-undef
            src={require("../../assets/images/BTC.png")}
          />
        </Col>
        <Col span={8} className="crypto-card__crypto-symbol">
          BTC
        </Col>
        <Col span={8} className="crypto-card__crypto-name">
          Bitcoin
        </Col>
      </Row>
      <Divider className="crypto-card__divider" />
      <span className="crypto-card__crypto-price">$87,193</span>
      <div className="crypto-card__crypto-percentage-change">
        <FontAwesomeIcon icon="fa-solid fa-up-long" />
        {/* <FontAwesomeIcon
          icon="circle-up"
          style={{ color: "#B1FFC2" }}
          // size="xs"
        /> */}
        12.95%
      </div>
    </Card>
  );
}

CryptoCard.propTypes = {};

export default CryptoCard;
