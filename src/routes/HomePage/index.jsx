import React from "react";
// import backgroundImage from "../../assets/images/home-bg.svg";
import "./Home.scss";
import MainView from "./components/MainView";
import CryptoCards from "./components/CryptoCards";
import XMFeatures from "./components/XMFeatures";
import Registration from "./components/Registration";
import EventGallery from "./components/EventGallery";
import BenefitsGrid from "./components/BenefitsGrid";
import Background from "./components/Background";

function Home() {
  return (
    <div className="home">
      <Background />
      <MainView />
      <CryptoCards />
      <XMFeatures />
      <Registration />
      <EventGallery />
      <BenefitsGrid />
    </div>
  );
}

export default Home;
