import React, { Component } from "react";
import styled from "styled-components";
import bg from "../img/bg.jpg";
import PrimaryButton from "./PrimaryButton";
import { Motion, spring, presets } from "react-motion";
import Scroll from "react-scroll"; // Imports all Mixins

let Link = Scroll.Link;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 600px;
  @media screen and (max-width: 1156px) {
    height: 500px;
  }
  @media screen and (max-width: 670px) {
    height: 400px;
  }
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  z-index: -9999;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  min-height: 600px;
  @media screen and (min-width: 1156px) {
    height: 500px;
  }
  @media screen and (max-width: 670px) {
    height: 400px;
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
  text-transform: uppercase;
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
    startAnim: false
  };
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({ startAnim: true });
    }, 1000);
  }
  render() {
    const { startAnim } = this.state;
    return (
      <Wrapper>
        <Img src={bg} alt="hero" />
        <Motion
          defaultStyle={{ y: -50, o: 0 }}
          style={{
            y: spring(startAnim ? 0 : -50, presets.wobbly),
            o: spring(startAnim ? 1 : 0)
          }}
        >
          {style => (
            <Content
              style={{
                opacity: style.o,
                transform: `translateY(${style.y}px)`
              }}
            >
              <Headline>Find a Route</Headline>
              <Paragraph>You say where, we show how</Paragraph>
              <Link to="app" spy={true} smooth={true} duration={500}>
                <PrimaryButton hoverBg="#f24d58">TRY IT</PrimaryButton>
              </Link>
            </Content>
          )}
        </Motion>
      </Wrapper>
    );
  }
}

export default Hero;
