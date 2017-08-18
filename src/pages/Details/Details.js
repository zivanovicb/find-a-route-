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
  componentWillMount() {
    const { match: { params: { id } } } = this.props;
    let obj = JSON.parse(localStorage.getItem("routes")).filter(item => {
      return item.id === id;
    })[0];

    console.log(obj);
    let start = obj.startingPointValue.description;
    let end = obj.destinationPointValue.description;

    if (obj) {
      this.setState({ start, end });
    }
  }
  componentDidMount() {
    GoogleMapsLoader.KEY = "AIzaSyBvObJn4ahKBqeSUZMb33g_EBtpuEHwklc";
    GoogleMapsLoader.LIBRARIES = ["places"];
    GoogleMapsLoader.load(google => {
      initialize(google, this.state.start, this.state.end);
    });
  }

  render() {
    return (
      <Wrapper>
        <div id="map" style={{ width: "400px", height: "400px" }} />
      </Wrapper>
    );
  }
}

function initialize(google, start, end) {
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  let mapOptions = {
    zoom: 7,
    center: chicago
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
  calcRoute(start, end);
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
