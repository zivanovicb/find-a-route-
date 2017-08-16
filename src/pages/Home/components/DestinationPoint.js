import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AutoComplete from "./AutoComplete";

const Wrapper = styled.div``;

export default class DestinationPoint extends Component {
  static propTypes = {
    updateValue: PropTypes.func.isRequired
  };

  render() {
    return (
      <Wrapper>
        <AutoComplete
          label="Choose destination"
          items={["apple", "orange", "carrot"]}
          onUpdateInput={value => this.props.updateValue(value)}
        />
      </Wrapper>
    );
  }
}
