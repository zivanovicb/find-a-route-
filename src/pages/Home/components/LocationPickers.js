import React, { Component } from "react";
import styled from "styled-components";
import Headline from "../../../components/Headline";

import { Motion, spring, presets } from "react-motion";
import makeDateString from "../../../helpers/dateString";

import PrimaryButton from "./PrimaryButton";
import LocationHr from "./LocationHr";

import LocationField from "./LocationField";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-flow: column wrap;
  }
`;

const Button = PrimaryButton.extend`
  padding: 15px;
  flex: 1 20%;
  position: relative;
  top: 5px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0;
  @media screen and (min-width: 960px) {
    margin-left: 15px;
  }
`;

export default class LocationPickers extends Component {
  state = {
    startingPointValue: null,
    destinationPointValue: null,
    startingPointError: false,
    destinationPointError: false,
    startAnim: false,
    // this one will fire after 1150(others are at 1000)
    delayedAnim: false
  };

  componentWillMount() {
    this.setState({
      routes: JSON.parse(localStorage.getItem("routes"))
    });
    setTimeout(() => {
      this.setState({ startAnim: true });
    }, 1000);

    setTimeout(() => {
      this.setState({ delayedAnim: true });
    }, 1150);
  }
  updateStartingPoint = startingPointValue =>
    this.setState({ startingPointValue });
  updateDestinationPoint = destinationPointValue =>
    this.setState({ destinationPointValue });

  handleAdd = () => {
    const { startingPointValue, destinationPointValue } = this.state;
    if (
      startingPointValue &&
      destinationPointValue &&
      (typeof startingPointValue === "object" &&
        typeof destinationPointValue === "object")
    ) {
      let uuidv1 = require("uuid/v1");
      uuidv1(); // ⇨ '985123a0-7e4f-11e7-9022-fb7190c856e4'

      let date = new Date();
      // Geting date in text
      let d = makeDateString(date);

      let newRoute = {
        id: uuidv1(),
        startingPointValue,
        destinationPointValue,
        date: d
      };

      this.props.addRoute(newRoute);
      this.setState({
        startingPointError: false,
        destinationPointError: false
      });

      // we check for errors only when user tries to get route(clicks on button)
    } else {
      const { startingPointValue, destinationPointValue } = this.state;
      if (!startingPointValue) this.setState({ startingPointError: true });

      if (!destinationPointValue)
        this.setState({
          destinationPointError: true
        });
    }
  };
  render() {
    const {
      startingPointError,
      destinationPointError,
      startAnim,
      delayedAnim
    } = this.state;
    return (
      <div>
        {/* Headline needs to be outside the wrapper, because Wrapper is flex parent  */}

        <Motion
          defaultStyle={{ y: -50, o: 0 }}
          style={{
            y: spring(startAnim ? 0 : -50, presets.wobbly),
            o: spring(startAnim ? 1 : 0)
          }}
        >
          {style =>
            <Headline
              style={{
                transform: `translateY(${style.y}px)`,
                opacity: style.o
              }}
            >
              Where would you love to arrive?
            </Headline>}
        </Motion>

        <Wrapper>
          <Motion
            defaultStyle={{ x: -350, o: 0 }}
            style={{
              x: spring(startAnim ? 0 : -350, presets.wobbly),
              o: spring(startAnim ? 1 : 0)
            }}
          >
            {style =>
              <LocationField
                style={{
                  width: "500px",
                  transform: `translateX(${style.x}px)`,
                  opacity: style.o
                }}
                updateValue={this.updateStartingPoint}
                label="Choose starting point"
                error={startingPointError}
                errorText="Please type in your starting point"
              />}
          </Motion>

          <Motion
            defaultStyle={{ y: 50, o: 0 }}
            style={{
              y: spring(delayedAnim ? 0 : 50, presets.gentle),
              o: spring(delayedAnim ? 1 : 0)
            }}
          >
            {style =>
              <LocationHr
                style={{
                  position: "relative",
                  top: "15px",
                  transform: `translateY(${style.y}px)`,
                  opacity: style.o
                }}
                dotsNum="3"
                childMargin="0 0 0 9px"
              />}
          </Motion>

          <Motion
            defaultStyle={{ x: 350, o: 0 }}
            style={{
              x: spring(startAnim ? 0 : 350, presets.wobbly),
              o: spring(startAnim ? 1 : 0)
            }}
          >
            {style =>
              <LocationField
                style={{
                  width: "500px",
                  transform: `translateX(${style.x}px)`,
                  opacity: style.o
                }}
                updateValue={this.updateDestinationPoint}
                label="Choose destination"
                error={destinationPointError}
                errorText="Please type in your ending point"
              />}
          </Motion>

          <Motion
            defaultStyle={{ x: 350, o: 0 }}
            style={{
              x: spring(startAnim ? 0 : 350, presets.wobbly),
              o: spring(startAnim ? 1 : 0)
            }}
          >
            {style =>
              <Button
                style={{
                  transform: `translateX(${style.x}px)`,
                  opacity: style.o
                }}
                onClick={this.handleAdd}
              >
                Add route
              </Button>}
          </Motion>
        </Wrapper>
      </div>
    );
  }
}
