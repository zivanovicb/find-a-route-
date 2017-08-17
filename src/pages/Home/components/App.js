import React, { Component } from "react";
import styled from "styled-components";
import LocationPickers from "./LocationPickers";
import theme from "../../../theme";
import Routes from "./Routes";
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
  font-size: 1.7em;
  margin: 50px 0 15px 0;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`;

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
  render() {
    const { routes } = this.state;
    return (
      <Wrapper>
        <Container>
          <Headline>Where would you love to arrive?</Headline>
          <LocationPickers addRoute={this.addRoute} />
          <Headline color={theme.darkViolet}>Routes</Headline>
          <Routes routes={routes} />
        </Container>
      </Wrapper>
    );
  }
}
