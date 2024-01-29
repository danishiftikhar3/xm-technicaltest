import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderContainer from "../Header";
import FooterContainer from "../Footer";

const { Header, Content, Footer } = Layout;

const headerStyle = {
  height: 100,
  backgroundColor: "#000000",
  display: "flex",
};
const footerStyle = {
  backgroundColor: "#000000",
  display: "flex",
  // height: 250,
};

function LayoutContainer() {
  return (
    <Layout>
      <Header style={headerStyle}>
        <HeaderContainer />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>
        <FooterContainer />
      </Footer>
    </Layout>
  );
}

export default LayoutContainer;
