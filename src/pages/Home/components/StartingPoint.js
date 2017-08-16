import React, { Component } from "react";
import styled from "styled-components";
import AutoComplete from "./AutoComplete";
import PropTypes from "prop-types";

// material-ui requires this for its events
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class StartingPoint extends Component {
  static propTypes = {
    updateValue: PropTypes.func.isRequired
  };

  render() {
    return (
      <AutoComplete
        label="Choose starting point"
        items={["apple", "orange", "carrot"]}
        onUpdateInput={value => this.props.updateValue(value)}
      />
    );
  }
}
