import React, { Component } from "react";
import styled from "styled-components";
import Headline from "../../../components/Headline";
import { Motion, spring, presets } from "react-motion";
import makeDateString from "../../../helpers/dateString";
import PrimaryButton from "./PrimaryButton";
import LocationHr from "./LocationHr";
import ArrowImg from "../img/arrow-white.svg";
import LocationField from "./LocationField";
import PropTypes from "prop-types";

let GoogleMapsLoader = require("google-maps");
var directionsService;

let uuidv1 = require("uuid/v1");

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-flow: column wrap;
  }
`;

const Err = styled.p`
  color: ${props => props.theme.red};
  opacity: 0;
  font-weight: bold;
  position: relative;
  top: 10px;
`;
const Button = PrimaryButton.extend`
  padding: 15px 25px 15px 0px;
  flex: 1 17%;
  position: relative;
  top: 5px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0;
  box-shadow: 0 14px 28px rgba(66, 133, 244, 0.17),
    0 10px 10px rgba(66, 133, 244, 0.15);
  :hover {
    background: ${props => props.theme.red};
    box-shadow: 0 14px 28px rgba(242, 77, 88, 0.17),
      0 10px 10px rgba(66, 77, 88, 0.15);
  }
  @media screen and (min-width: 960px) {
    margin-left: 15px;
  }

  @media screen and (max-width: 960px) {
    width: 50%;
  }
  ::after {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    background-image: url(${props => props.url});
    background-size: 22px 22px;
    background-repeat: no-repeat;
    position: absolute;
    right: 16px;
    bottom: 13px;
  }
`;

export default class LocationPickers extends Component {
  static propTypes = {
    userAddress: PropTypes.string,
    addRoute: PropTypes.func.isRequired,
    getScrollNode: PropTypes.func.isRequired
  };
  state = {
    startingPointValue: null,
    destinationPointValue: null,
    err: false,
    errMessage: "",
    startAnim: false,
    // this one will fire after 1150(others are at 1000)
    delayedAnim: false
  };

  componentWillMount() {
    this.setState({
      routes: JSON.parse(localStorage.getItem("routes"))
    });
    setTimeout(() => {
      this.setState({ startAnim: true });
    }, 1000);

    setTimeout(() => {
      this.setState({ delayedAnim: true });
    }, 1150);
  }

  componentDidMount() {
    GoogleMapsLoader.KEY = "AIzaSyBvObJn4ahKBqeSUZMb33g_EBtpuEHwklc";
    GoogleMapsLoader.LIBRARIES = ["places"];
    GoogleMapsLoader.load(google => {
      initialize(google, this.state.startingPointValue, this.state.end);
    });
    this.props.getScrollNode(this.scrollNode);
  }

  updateStartingPoint = startingPointValue =>
    this.setState({ startingPointValue });
  updateDestinationPoint = destinationPointValue =>
    this.setState({ destinationPointValue });

  handleAdd = () => {
    const { startingPointValue, destinationPointValue } = this.state;

    if (startingPointValue && destinationPointValue) {
      let date = new Date();
      this.setState({ err: false, errMessage: "" });
      // make request
      calcRoute(startingPointValue, destinationPointValue, (route, status) => {
        if (status === "OK") {
          let newRoute = {
            id: uuidv1(),
            dateAdded: makeDateString(date),
            startingPointValue,
            destinationPointValue,
            route
          };
          this.props.addRoute(newRoute);
        } else if (status === "ZERO_RESULTS") {
          this.setState({
            err: true,
            errMessage:
              "Sorry, we couldn't find any driving routes for these locations"
          });
        }
      });
    } else {
      this.setState({ err: true, errMessage: "Please use both fields!" });
    }
  };

  // svg signature: ({ className,  icon, fill, hoverFill, width, height, style })
  render() {
    const {
      startAnim,
      delayedAnim,
      err,
      errMessage,
      userLocation
    } = this.state;
    return (
      <div ref={ref => (this.scrollNode = ref)}>
        {/* Headline needs to be outside the wrapper, because Wrapper is flex parent  */}

        <Motion
          defaultStyle={{ y: -50, o: 0 }}
          style={{
            y: spring(startAnim ? 0 : -50, presets.wobbly),
            o: spring(startAnim ? 1 : 0)
          }}
        >
          {style => (
            <Headline
              style={{
                transform: `translateY(${style.y}px)`,
                opacity: style.o
              }}
              textAlign="center"
            >
              Find a Route.{" "}
              <span style={{ letterSpacing: "4px", fontWeight: "800" }}>
                Real Quick.
              </span>
            </Headline>
          )}
        </Motion>

        <Err style={{ opacity: err ? 1 : 0, margin: 0 }}>{errMessage}</Err>
        <Wrapper>
          {/* STARTING POINT LOCATION FIELD */}
          <Motion
            defaultStyle={{ x: -350, o: 0 }}
            style={{
              x: spring(startAnim ? 0 : -350, presets.wobbly),
              o: spring(startAnim ? 1 : 0)
            }}
          >
            {style => (
              <LocationField
                style={{
                  width: "500px",
                  transform: `translateX(${style.x}px)`,
                  opacity: style.o
                }}
                userAddress={this.props.userAddress}
                updateValue={this.updateStartingPoint}
                label="Choose starting point"
                userLocation={userLocation}
              />
            )}
          </Motion>

          {/* HR  */}
          <Motion
            defaultStyle={{ y: 50, o: 0 }}
            style={{
              y: spring(delayedAnim ? 0 : 50, presets.gentle),
              o: spring(delayedAnim ? 1 : 0)
            }}
          >
            {style => (
              <LocationHr
                style={{
                  position: "relative",
                  top: "10px",
                  transform: `translateY(${style.y}px)`,
                  opacity: style.o
                }}
                dotsNum="3"
                childMargin="0 0 0 9px"
              />
            )}
          </Motion>

          {/* DESTINATION POINT */}
          <Motion
            defaultStyle={{ x: 350, o: 0 }}
            style={{
              x: spring(startAnim ? 0 : 350, presets.wobbly),
              o: spring(startAnim ? 1 : 0)
            }}
          >
            {style => (
              <LocationField
                style={{
                  width: "500px",
                  transform: `translateX(${style.x}px)`,
                  opacity: style.o
                }}
                updateValue={this.updateDestinationPoint}
                label="Choose destination"
                userLocation={userLocation}
              />
            )}
          </Motion>

          {/* ADD ROUTE BUTTON */}
          <Motion
            defaultStyle={{ x: 350, o: 0 }}
            style={{
              x: spring(startAnim ? 0 : 350, presets.wobbly),
              o: spring(startAnim ? 1 : 0)
            }}
          >
            {style => (
              <Button
                url={ArrowImg}
                style={{
                  transform: `translateX(${style.x}px)`,
                  opacity: style.o,
                  fontWeight: 700
                }}
                onClick={this.handleAdd}
              >
                GO!
              </Button>
            )}
          </Motion>
        </Wrapper>
      </div>
    );
  }
}

function initialize(google, start, end) {
  directionsService = new google.maps.DirectionsService();
}

function calcRoute(start, end, cb) {
  var request = {
    origin: start,
    destination: end,
    travelMode: "DRIVING"
  };
  directionsService.route(request, (result, status) => {
    cb(result, status);
  });
}
