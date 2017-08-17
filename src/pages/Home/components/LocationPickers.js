import React, { Component } from "react";
import styled from "styled-components";

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
  position: relative;
  top: 5px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0;
`;

export default class LocationPickers extends Component {
  state = {
    startingPointValue: null,
    destinationPointValue: null
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

      let newRoute = {
        id: uuidv1(),
        startingPointValue,
        destinationPointValue,
        date: "Today 20:30"
      };

      this.props.addRoute(newRoute);
    } else {
      alert("ne idemo");
    }
  };
  render() {
    console.log("its render", this.state.routes);
    return (
      <Wrapper>
        <LocationField
          updateValue={this.updateStartingPoint}
          label="Choose starting point"
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
        />
        <Button onClick={this.handleAdd}>Add route</Button>
      </Wrapper>
    );
  }
}
