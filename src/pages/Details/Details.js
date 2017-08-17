import React, { Component } from "react";
import styled from "styled-components";
import { mapsAPI_KEY } from "../../config";

let GoogleMapsLoader = require("google-maps");
const Wrapper = styled.div``;

let map;
let directionsDisplay;
let directionsService;

export default class Details extends Component {
  state = {
    start: "",
    end: ""
  };
  componentDidMount() {
    console.log(mapsAPI_KEY);
    GoogleMapsLoader.KEY = mapsAPI_KEY;
    GoogleMapsLoader.LIBRARIES = ["places"];
    GoogleMapsLoader.load(function(google) {
      initialize(google);
    });
  }
  handleChange = e => {
    const { target: { value } } = e;
    this.setState({ start: value }, () => {
      console.log(this.state);
    });
    calcRoute();
  };
  render() {
    return (
      <Wrapper>
        <input type="text" onChange={this.handleChange} id="start" />
        <input type="text" value="belgrade" id="end" />
        <div id="map" style={{ width: "400px", height: "400px" }} />
      </Wrapper>
    );
  }
}

function initialize(google) {
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();
  let chicago = new google.maps.LatLng(41.850033, -87.6500523);
  let mapOptions = {
    zoom: 7,
    center: chicago
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
  calcRoute();
}

function calcRoute() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  console.log(start, end);
  var request = {
    origin: start,
    destination: end,
    travelMode: "DRIVING"
  };
  directionsService.route(request, function(result, status) {
    if (status === "OK") {
      directionsDisplay.setDirections(result);
    }
  });
}
