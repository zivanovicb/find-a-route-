import React, { Component } from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import App from "./components/App";

const Wrapper = styled.div``;

export default class Home extends Component {
  state = { scrollNode: null };
  getScrollNode = node =>
    this.setState({
      scrollNode: node
    });
  componentDidMount = () => (document.title = "Routes");
  render() {
    return (
      <Wrapper>
        <Hero scrollNode={this.state.scrollNode} />
        <App getScrollNode={this.getScrollNode} />
        <div style={{ width: "100%", height: "300px" }} />
      </Wrapper>
    );
  }
}
