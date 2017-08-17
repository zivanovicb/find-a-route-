import React, { Component } from "react";
import styled from "styled-components";
import LocationPickers from "./LocationPickers";
import theme from "../../../theme";
import Routes from "./Routes";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import "./transitions.css";

const uuidv4 = require("uuid/v4");

const Wrapper = styled.div`margin-top: 50px;`;
const Container = styled.div`
  @media screen and (max-width: 960px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 960px) {
    width: 960px;
    margin: 0 auto;
    font-size: 1rem;
  }
`;

const Headline = styled.h2`
  color: ${props => (props.color ? props.color : props.theme.cohesiveBlue)};
  font-size: 2em;
  margin: 50px 0 15px 0;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  @media screen and (min-width: 960px) {
    font-size: 2.6em;
  }
`;

//
export default class App extends Component {
  state = {
    routes: JSON.parse(localStorage.getItem("routes")) || []
  };
  addRoute = newRoute => {
    const { routes } = this.state;
    this.setState(
      (prevState, props) => {
        return {
          routes: [...prevState.routes, newRoute]
        };
      },
      () => {
        localStorage.setItem("routes", JSON.stringify(this.state.routes));
      }
    );
  };

  deleteRoute = id => {
    const { routes } = this.state;

    let copyArr = routes;
    let index = routes.findIndex(o => {
      return o.id === id;
    });

    // if we find the obj in state, as we should
    // and we can instantly change localStorage
    if (index != -1) {
      copyArr.splice(index, 1);
      this.setState({ routes: copyArr }, () => {
        console.log("natural state ", this.state, routes);
        localStorage.setItem("routes", JSON.stringify(copyArr));
        console.log(
          "local storage",
          JSON.parse(localStorage.getItem("routes"))
        );
      });
    }
  };
  render() {
    const { routes } = this.state;
    return (
      <Wrapper>
        <Container>
          <CSSTransitionGroup
            transitionName="headline"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}
          >
            <Headline>Where would you love to arrive?</Headline>
          </CSSTransitionGroup>

          <LocationPickers addRoute={this.addRoute} />
          {this.state.routes.length === 0
            ? <CSSTransitionGroup
                transitionName="headline"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={0}
              >
                <Headline color={theme.darkViolet} key="1">
                  You haven't entered any routes yet
                </Headline>
              </CSSTransitionGroup>
            : <Headline color={theme.darkViolet} key="2">
                Your routes
              </Headline>}

          <Routes deleteRoute={this.deleteRoute} routes={routes} />
        </Container>
      </Wrapper>
    );
  }
}
