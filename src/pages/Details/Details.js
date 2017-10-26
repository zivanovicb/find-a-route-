import React, { Component } from "react";
import styled from "styled-components";
import Top from "./components/Top";
import PropTypes from "prop-types";
let GoogleMapsLoader = require("google-maps");
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

let map;
let directionsDisplay;

export default class Details extends Component {
  state = {
    obj: null,
    menuShown: false
  };
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    const { match: { params: { id } } } = this.props;
    let obj = JSON.parse(localStorage.getItem("routes")).filter(item => {
      return item.id === id;
    })[0];

    if (obj) {
      this.setState({ obj });
    }

    // delay menu open to reduce lag
    setTimeout(() => {
      this.setState({ menuShown: true });
    }, 2000);
  }
  componentDidMount() {
    GoogleMapsLoader.KEY = "AIzaSyBvObJn4ahKBqeSUZMb33g_EBtpuEHwklc";
    GoogleMapsLoader.LIBRARIES = ["places"];
    GoogleMapsLoader.load(google => {
      initialize(google, this.state.obj.route);
    });
  }

  deleteRoute = id => {
    let routes = JSON.parse(localStorage.getItem("routes"));
    let index = routes.findIndex(o => {
      return o.id === id;
    });

    let copyArr = routes;
    // if we find the obj in state, as we should
    // and we can instantly change localStorage
    if (index !== -1) {
      copyArr.splice(index, 1);
      localStorage.setItem("routes", JSON.stringify(copyArr));
    }
  };

  render() {
    return (
      <Wrapper>
        <Top deleteRoute={this.deleteRoute} data={this.state.obj} />
        <div id="map" style={{ width: "100%", height: "100%" }} />
      </Wrapper>
    );
  }
}

function initialize(google, route) {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  let mapOptions = {
    zoom: 7,
    center: chicago
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setDirections(route);
}
