import React, { Component } from "react";
import AutoComplete from "./AutoComplete";
import PropTypes from "prop-types";
import axios from "axios";

import { buildQueryString } from "../../../helpers/queryStringBuilder";
// material-ui requires this for its events
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const BASE_URL = "http://localhost:3000";
export default class LocationField extends Component {
  state = {
    value: "",
    placeId: "",
    items: []
  };
  static propTypes = {
    updateValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };

  onUpdateInput = value => {
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

    updateParent(this.state.items, value, this.props.updateValue);
  };

  render() {
    const { items } = this.state;
    const { label, error, errorText } = this.props;
    console.log(error);
    return (
      <AutoComplete
        label={label}
        items={items}
        onUpdateInput={this.onUpdateInput}
        error={error}
        errorText={errorText}
      />
    );
  }
}

// whole place object is sent back to parent
function updateParent(items, value, cb) {
  let obj = items.filter(item => {
    return item.description === value;
  })[0];
  cb(obj ? obj : null);
}
