import React, { Component } from "react";
import styled from "styled-components";
import bg from "../img/bg.jpg";
import PrimaryButton from "./PrimaryButton";
import { Motion, spring, presets } from "react-motion";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 600px;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  z-index: -9999;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  @media screen and (min-width: 1156px) {
    height: 600px;
  }
`;

const Content = styled.div`
  width: 1156px;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-size: 1.25rem;
`;

const Headline = styled.div`
  font-size: 3.4rem;
  letter-spacing: 7px;
  font-weight: 800;
`;

const Paragraph = styled.p`letter-spacing: 3px;`;

const DarkBlueContainer = styled.div`
  width: 2000px;
  height: 600px;
  background: #2b3b67;
`;
class DarkBlue extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("rendered");
    const { style } = this.props;
    return <DarkBlueContainer style={style} />;
  }
}
class Hero extends Component {
  state = {
    startAnimation: false
  };
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({ startAnimation: true });
    }, 500);
  }
  render() {
    const { startAnimation } = this.state;

    return (
      <Wrapper>
        <Img src={bg} alt="hero" />
        {renderContent()}
      </Wrapper>
    );
  }
}

const renderContent = () =>
  <Content>
    <Headline>Find a Route</Headline>
    <Paragraph>You say where, we show how</Paragraph>
    <PrimaryButton>TRY IT</PrimaryButton>
  </Content>;
export default Hero;
