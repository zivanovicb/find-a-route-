import React, { Component } from "react";
import styled from "styled-components";
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
  flex: 1 28%;
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
    destinationPointError: false
  };

  componentWillMount() {
    this.setState({
      routes: JSON.parse(localStorage.getItem("routes"))
    });
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
    const { startingPointError, destinationPointError } = this.state;
    return (
      <div>
        <Wrapper>
          <LocationField
            updateValue={this.updateStartingPoint}
            label="Choose starting point"
            error={startingPointError}
            errorText="Please type in your starting point"
          />
          <LocationHr
            style={{
              position: "relative",
              top: "15px"
            }}
            dotsNum="3"
            childMargin="0 0 0 9px"
          />
          <LocationField
            updateValue={this.updateDestinationPoint}
            label="Choose destination"
            error={destinationPointError}
            errorText="Please type in your ending point"
          />
          <Button onClick={this.handleAdd}>Add route</Button>
        </Wrapper>
      </div>
    );
  }
}
