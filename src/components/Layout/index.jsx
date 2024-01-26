import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderContainer from "../Header";
import FooterContainer from "../Footer";

const { Header, Content, Footer } = Layout;

function LayoutContainer() {
  return (
    <Layout>
      <Header>
        <h1>hi</h1>
        <HeaderContainer />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <FooterContainer />
      </Footer>
    </Layout>
  );
}

export default LayoutContainer;
