import React, { Component } from "react";
import styled from "styled-components";
import Hero from "./components/Hero";

const Wrapper = styled.div``;

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Hero />
      </Wrapper>
    );
  }
}
