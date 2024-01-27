import React from "react";
import Routes from "./Routes";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
library.add(fab, fas, far);
