import React from "react";

import "./Background.scss";

import bg1 from "../../../assets/images/bg-1.png";
import bg2 from "../../../assets/images/bg-2.png";
import bg3 from "../../../assets/images/bg-3.png";
import bg4 from "../../../assets/images/bg-4.png";
import bg5 from "../../../assets/images/bg-5.png";
import bg6 from "../../../assets/images/bg-6.png";
import bg7 from "../../../assets/images/bg-7.png";
import bg8 from "../../../assets/images/bg-8.png";

function Background() {
  return (
    <div className="background">
      <img className="background__img1" src={bg1} />
      <img className="background__img2" src={bg2} />
      <img className="background__img3" src={bg3} />
      <img className="background__img4" src={bg4} />
      <img className="background__img5" src={bg5} />
      <img className="background__img6" src={bg6} />
      <img className="background__img7" src={bg7} />
      <img className="background__img8" src={bg8} />
    </div>
  );
}

export default Background;
