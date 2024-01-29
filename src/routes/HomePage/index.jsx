import React from "react";

import "./HomePage.scss";
import ZeroSwapBanner from "./components/ZeroSwapBanner";
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
      <ZeroSwapBanner />
      <CryptoCards />
      <XMFeatures />
      <Registration />
      <EventGallery />
      <BenefitsGrid />
    </div>
  );
}

export default Home;
