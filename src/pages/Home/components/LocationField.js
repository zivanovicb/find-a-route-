import React, { Component } from "react";
import AutoComplete from "./AutoComplete";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import { buildQueryString } from "../../../helpers/queryStringBuilder";
// material-ui requires this for its events
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const BASE_URL = "https://find-a-route-1502937136906.appspot.com";

const Wrapper = styled.div`
  @media screen and (max-width: 550px) {
    width: 100% !important;
  }
`;
export default class LocationField extends Component {
  state = {
    value: "",
    placeId: "",
    items: []
  };
  static propTypes = {
    updateValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    userLocation: PropTypes.object
  };

  onUpdateInput = value => {
    const { userLocation } = this.props;
    console.log(userLocation);
    let queryString = buildQueryString(value);
    // getting autocomplete items
    axios
      .request({
        url: BASE_URL + "/api/autocomplete",
        method: "GET",
        params: {
          query: queryString
        }
      })
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    this.props.updateValue(value);
  };

  render() {
    const { items } = this.state;
    const { label, error, errorText, style, userAddress } = this.props;
    return (
      <Wrapper style={style}>
        <AutoComplete
          label={label}
          items={items}
          onUpdateInput={this.onUpdateInput}
          error={error}
          errorText={errorText}
          style={style}
          userAddress={userAddress ? userAddress : "Your location"}
        />
      </Wrapper>
    );
  }
}
