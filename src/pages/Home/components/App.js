import React, { Component } from "react";
import styled from "styled-components";
import LocationPickers from "./LocationPickers";
import theme from "../../../theme";
import Routes from "./Routes";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import "./transitions.css";
import Headline from "../../../components/Headline";
import { Motion, spring, presets } from "react-motion";
import Scroll from "react-scroll"; // Imports all Mixins
import { scroller } from "react-scroll"; //Imports scroller mixin, can use as scroller.scrollTo()
import axios from "axios";
const uuidv4 = require("uuid/v4");
let Element = Scroll.Element;
const Wrapper = styled.div`margin-top: 50px;`;
const Container = styled.div`
  @media screen and (max-width: 960px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 960px) {
    width: 960px;
    margin: 0 auto;
    font-size: 1rem;
  }
`;

export default class App extends Component {
  state = {
    routes: JSON.parse(localStorage.getItem("routes")) || [],
    geolocationSupport: true,
    // has lat and lng
    userLocation: null,
    // street address,
    userAddress: null
  };
  addRoute = newRoute => {
    const { routes } = this.state;
    this.setState(
      (prevState, props) => {
        return {
          routes: [...prevState.routes, newRoute]
        };
      },
      // cb to call after local state is changed
      // so we are immediately updating localStorage
      () => {
        localStorage.setItem("routes", JSON.stringify(this.state.routes));
      }
    );
  };

  deleteRoute = id => {
    const { routes } = this.state;

    let copyArr = routes;
    let index = routes.findIndex(o => {
      return o.id === id;
    });

    // if we find the obj in state, as we should
    // and we can instantly change localStorage
    if (index != -1) {
      copyArr.splice(index, 1);
      this.setState({ routes: copyArr }, () => {
        console.log("natural state ", this.state, routes);
        localStorage.setItem("routes", JSON.stringify(copyArr));
        console.log(
          "local storage",
          JSON.parse(localStorage.getItem("routes"))
        );
      });
    }
  };
  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.setState({ userLocation: pos });
        // call to get user address
        axios
          .request({
            method: "GET",
            url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=AIzaSyBvObJn4ahKBqeSUZMb33g_EBtpuEHwklc`
          })
          .then(response => {
            console.log(response.data.results);
            let addr = response.data.results[0].formatted_address;
            if (addr) this.setState({ userAddress: addr });
            console.log(addr, this.state.userAddress);
          })
          .catch(e => {
            console.log(e);
          });
      });
    } else {
      this.setState({ geolocationSupport: false });
    }
  }
  render() {
    console.log(this.state);
    const { routes, userAddress } = this.state;
    return (
      <Wrapper>
        <Container>
          <Element name="app">
            <LocationPickers
              userAddress={userAddress}
              addRoute={this.addRoute}
            />
            <Motion
              defaultStyle={{ x: -350, o: 0 }}
              style={{
                x: spring(routes.length === 0 ? 0 : -350, presets.wobbly),
                o: spring(routes.length === 0 ? 1 : 0)
              }}
            >
              {style =>
                <Headline
                  style={{
                    opacity: style.o,
                    transform: `translateX(${style.x}px)`,
                    display: routes.length == 0 ? "block" : "none"
                  }}
                  color={theme.darkViolet}
                  key="1"
                >
                  No routes yet
                </Headline>}
            </Motion>

            <Motion
              defaultStyle={{ x: 350, o: 0 }}
              style={{
                x: spring(routes.length !== 0 ? 0 : 350, presets.wobbly),
                o: spring(routes.length !== 0 ? 1 : 0)
              }}
            >
              {style =>
                <Headline
                  className="routes-headline"
                  style={{
                    opacity: style.o,
                    transform: `translateX(${style.x}px)`,
                    display: routes.length !== 0 ? "block" : "none"
                  }}
                  color={theme.darkViolet}
                  key="1"
                >
                  You asked for
                </Headline>}
            </Motion>

            <Routes deleteRoute={this.deleteRoute} routes={routes} />
          </Element>
        </Container>
      </Wrapper>
    );
  }
}
