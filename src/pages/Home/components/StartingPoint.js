import React, { Component } from "react";
import styled from "styled-components";
import AutoComplete from "./AutoComplete";
import PropTypes from "prop-types";
import axios from "axios";

import { buildQueryString } from "../../../helpers/queryStringBuilder";
// material-ui requires this for its events
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const BASE_URL = "http://localhost:3000";
export default class StartingPoint extends Component {
  state = {
    items: [],
    queryString: ""
  };
  static propTypes = {
    updateValue: PropTypes.func.isRequired
  };

  onUpdateInput = value => {
    // updating parent state
    this.props.updateValue(value);

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
        let arr = [];
        for (let i = 0; i < response.data.length; i++)
          arr.push(response.data[i].description);

        this.setState({ items: arr });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <AutoComplete
          label="Choose starting point"
          items={items}
          onUpdateInput={this.onUpdateInput}
          className="yess"
        />
        <div id="map" />
      </div>
    );
  }
}
