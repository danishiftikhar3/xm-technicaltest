import React from "react";
import { Col, Row } from "antd";
import CryptoCard from "../../../components/CryptoCard";

function CryptoCards() {
  return (
    <Row justify="space-around">
      <Col span={3}>
        <CryptoCard />
      </Col>
      <Col span={3}>
        <CryptoCard />
      </Col>
      <Col span={3}>
        <CryptoCard />
      </Col>
    </Row>
  );
}

export default CryptoCards;
