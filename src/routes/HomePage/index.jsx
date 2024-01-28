import React from "react";
// import backgroundImage from "../../assets/images/home-bg.svg";
import "./Home.scss";
import MainView from "./components/MainView";
import CryptoCards from "./components/CryptoCards";
import XMFeatures from "./components/XMFeatures";

function Home() {
  return (
    <div className="home">
      <div
        className="upper-container"
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   backgroundSize: "cover",
        //   height: "100vh",
        // }}
      >
        <MainView />
        <CryptoCards />
        <XMFeatures />
      </div>
    </div>
  );
}

export default Home;
