import React, { Component } from "react";
import styled from "styled-components";
import LocationPickers from "./LocationPickers";
import theme from "../../../theme";
import Routes from "./Routes";

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
  render() {
    return (
      <Wrapper>
        <Container>
          <Headline textAlign="center">
            Where would you love to arrive?
          </Headline>
          <LocationPickers />
          <Headline color={theme.darkViolet}>Routes</Headline>
          <Routes />
        </Container>
      </Wrapper>
    );
  }
}
