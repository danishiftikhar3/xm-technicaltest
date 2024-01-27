import React from "react";
import { Col, Menu, Row } from "antd";
import logo from "../../assets/images/xm-logo.png";
import "./header.scss";

function HeaderContainer() {
  const items = [
    {
      key: 0,
      label: "XM Homepage",
    },
    {
      key: 1,
      label: "Support",
    },
  ];

  return (
    <Row
      className="header"
      justify={{
        xxl: "space-between",
        xl: "space-between",
        lg: "space-between",
        md: "center",
        sm: "center",
        xs: "center",
      }}
      align="middle"
    >
      <Col
        xxl={3}
        xl={3}
        lg={3}
        md={24}
        sm={24}
        xs={24}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img className="header__img" alt="XM Logo" src={logo} />
      </Col>
      <Col xxl={3} xl={4} lg={4} md={0} sm={0} xs={0}>
        <Menu mode="horizontal" items={items} selectable={false} />
      </Col>
    </Row>
  );
}

export default HeaderContainer;
