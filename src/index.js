import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";

import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

const Routing = () =>
  <Router>
    <div>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider>
          <Route exact path="/" component={Home} />
        </MuiThemeProvider>
      </ThemeProvider>

      <ThemeProvider theme={theme}>
        <Route exact path="/details" component={Details} />
      </ThemeProvider>
    </div>
  </Router>;

ReactDOM.render(<Routing />, document.getElementById("root"));
registerServiceWorker();
