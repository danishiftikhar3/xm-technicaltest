import React from "react";
import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
} from "react-router-dom";

import LayoutContainer from "./components/Layout/index";
import Home from "./routes/HomePage";

function Routes() {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<LayoutContainer />}>
          <Route index element={<Home />} />
        </Route>
      </ReactRoutes>
    </Router>
  );
}

export default Routes;
