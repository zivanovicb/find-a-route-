import React, { Component } from "react";
import styled from "styled-components";
import bg from "../img/bg.jpg";
import PrimaryButton from "./PrimaryButton";
import { Motion, spring, presets } from "react-motion";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 600px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media screen and (max-width: 1156px) {
    height: 500px;
  }
  @media screen and (max-width: 670px) {
    height: 400px;
  }
  overflow: hidden;
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

  scrollToScrollNode = () => {
    if (this.props.scrollNode) {
      this.props.scrollNode.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  };
  render() {
    const { startAnim } = this.state;
    return (
      <Wrapper>
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
              <PrimaryButton
                hoverBg="#f24d58"
                onClick={this.scrollToScrollNode}
              >
                TRY IT
              </PrimaryButton>
            </Content>
          )}
        </Motion>
      </Wrapper>
    );
  }
}

Hero.propTypes = {
  // first value given to component is null which is object
  // and second value is DOM Element
  scrollNode: PropTypes.element
};
export default Hero;
