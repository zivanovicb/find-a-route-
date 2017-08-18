import React, { Component } from "react";
import styled from "styled-components";
import { mapsAPI_KEY } from "../../config";
import { bubble as Menu } from "react-burger-menu";
import theme from "../../theme";
import Top from "./components/Top";
import PropTypes from "prop-types";
let GoogleMapsLoader = require("google-maps");
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

let map;
let directionsDisplay;
let directionsService;
let directionsLeg;
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
    console.log(this.state.obj);
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
    console.log("before deleting", JSON.parse(localStorage.getItem("routes")));
    // if we find the obj in state, as we should
    // and we can instantly change localStorage
    if (index != -1) {
      copyArr.splice(index, 1);
      localStorage.setItem("routes", JSON.stringify(copyArr));
    }
    console.log("after deleting", JSON.parse(localStorage.getItem("routes")));
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
  directionsService = new google.maps.DirectionsService();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  let mapOptions = {
    zoom: 7,
    center: chicago
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setDirections(route);
}

function calcRoute(start, end) {
  var request = {
    origin: start,
    destination: end,
    travelMode: "DRIVING"
  };
  directionsService.route(request, function(result, status) {
    console.log("result is ", result, "status is ", status);
    if (status === "OK") {
      directionsDisplay.setDirections(result);
    }
  });
}
