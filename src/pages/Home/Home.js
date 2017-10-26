import React, { Component } from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import App from "./components/App";

const Wrapper = styled.div``;

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Hero />
        <App />
        <div style={{ width: "100%", height: "300" }} />
      </Wrapper>
    );
  }
}
