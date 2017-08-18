import React, { Component } from "react";
import styled from "styled-components";
import { mapsAPI_KEY } from "../../config";
import { bubble as Menu } from "react-burger-menu";
import theme from "../../theme";
import Top from "./components/Top";

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

  render() {
    return (
      <Wrapper>
        <Top data={this.state.obj} />
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

let styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: theme.darkViolet
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: theme.darkViolet
  },
  bmMenu: {
    display: "none",
    background: theme.darkViolet,
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: theme.darkViolet
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};
