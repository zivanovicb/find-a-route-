import React, { Component } from "react";
import styled from "styled-components";

import PrimaryButton from "./PrimaryButton";
import LocationHr from "./LocationHr";

import StartingPoint from "./StartingPoint";
import DestinationPoint from "./DestinationPoint";

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
    startingPointValue: "",
    destinationPointValue: ""
  };
  updateStartingPoint = startingPointValue =>
    this.setState({ startingPointValue });
  updateDestinationPoint = destinationPointValue =>
    this.setState({ destinationPointValue });

  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <Wrapper>
        <StartingPoint updateValue={this.updateStartingPoint} />
        <LocationHr
          style={{
            position: "relative",
            top: "15px"
          }}
        />
        <DestinationPoint updateValue={this.updateDestinationPoint} />
        <Button>Add route</Button>
      </Wrapper>
    );
  }
}
