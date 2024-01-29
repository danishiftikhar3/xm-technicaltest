import React from "react";

import "./ZeroSwapBanner.scss";
import { Button } from "antd";

function ZeroSwapBanner() {
  return (
    <div className="zero-swap-banner">
      <div className="zero-swap-banner__innercontainer">
        <p className="zero-swap-banner__innercontainer__trade-with-badge">
          trade with
        </p>
        <p className="zero-swap-banner__innercontainer__promotion-heading">
          <b>Zero Swaps</b> on All XM Ultra Low <br />
          Accounts for more than 25 instruments!
        </p>
        <p className="zero-swap-banner__innercontainer__promotion-details">
          Enjoy spreads as <b>low as 0.6 pips</b> and
          <b> leverage up to 1000:1</b> on <br /> instruments like
          <b> EURUSD, USDJPY, EURJPY, GBPUSD, </b> and <b>Gold.</b>
        </p>
        <Button className="zero-swap-banner__innercontainer__open-account-btn">
          Open Account
        </Button>
        <p className="zero-swap-banner__innercontainer__demo-account">
          New to trading? Try a <u>Demo account.</u>
        </p>
        <span className="zero-swap-banner__innercontainer__conditions">
          Terms and Conditions apply
          <span className="zero-swap-banner__innercontainer__conditions--red">
            *
          </span>
          . To read the full T&Cs,{" "}
          <a className="zero-swap-banner__innercontainer__conditions--red">
            click here.
          </a>
        </span>
      </div>
    </div>
  );
}

export default ZeroSwapBanner;
