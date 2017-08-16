import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

const theme = {
  blue: "#4285f4"
};

const Routing = () =>
  <Router>
    <div>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Home} />
      </ThemeProvider>
    </div>
  </Router>;

ReactDOM.render(<Routing />, document.getElementById("root"));
registerServiceWorker();
