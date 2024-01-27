import React from "react";
// import backgroundImage from "../../assets/images/home-bg.svg";
import "./Home.scss";
import MainView from "./components/MainView";
import CryptoCards from "./components/CryptoCards";

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
      </div>
    </div>
  );
}

export default Home;
