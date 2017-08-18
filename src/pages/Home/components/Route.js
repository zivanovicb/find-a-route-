import React, { Component } from "react";
import styled, { css } from "styled-components";
import LocationHr from "./LocationHr";
import theme from "../../../theme";
import PropTypes from "prop-types";
import Svg from "./Svg";
import { Motion, spring, presets } from "react-motion";
import { Redirect } from "react-router";
import DeleteButton from "../../../components/DeleteButton";
import DetailsButton from "../../../components/DetailsButton";

const RouteWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
  background: ${props => props.theme.darkViolet};
  border-radius: 5px;
  color: ${props => props.theme.grey};
  font-size: 1.1rem;
  margin-bottom: 20px;
  box-shadow: 0 14px 28px rgba(36, 38, 59, 0.25),
    0 10px 10px rgba(36, 38, 59, 0.22);
  transition: all .12s ease-in-out;
  :hover {
    transform: scale(1.03);
    background: #1d2563;
  }
  div.desktopVisible {
    display: none;
    @media screen and (min-width: 960px) {
      display: block;
    }
  }
  div.mobileVisible {
    display: none;
    @media screen and (max-width: 960px) {
      display: flex;
    }
  }
`;

const RouteText = styled.div`
  display: flex;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  font-weight: bold;
  span {
    display: inline-block;
    @media screen and (min-width: 960px) {
      &:nth-of-type(1) {
        margin-right: 15px;
      }
      &:nth-of-type(2) {
        margin-left: 15px;
      }
    }
    @media screen and (max-width: 960px) {
      display: block;
      &:nth-of-type(1) {
        margin-bottom: 10px;
      }
      &:nth-of-type(2) {
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 960px) {
    flex-flow: column nowrap;
  }
`;

const RouteDate = styled.p`
  font-size: 0.8em;
  font-weight: 400;
  margin: 10px 0 0 0;
`;

const RouteCta = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    flex-flow: column;
    justify-content: space-between;
    a,
    button {
      margin-bottom: 5px;
    }
  }
`;

const RouteInfo = styled.div`
  flex: 1;
  margin-left: 10px;
`;

// svg signature: icon, fill, hoverFill, width, height, style
class Route extends Component {
  state = {
    deleteAnimation: false,
    redirect: false
  };
  static propTypes = {
    id: PropTypes.string.isRequired,
    startingPointValue: PropTypes.string.isRequired,
    destinationPointValue: PropTypes.string.isRequired,
    timeAdded: PropTypes.string.isRequired,
    style: PropTypes.object
  };
  handleDelete = () => {
    this.setState({ deleteAnimation: true });
    // updating App.js state
    //this.props.handleDelete(this.props.id);
  };
  handleRedirect = () => {
    this.setState({ redirect: !this.state.redirect });
  };
  render() {
    const { deleteAnimation } = this.state;
    const {
      id,
      startingPointValue,
      destinationPointValue,
      timeAdded,
      style
    } = this.props;
    return (
      <RouteWrapper
        onClick={this.handleRedirect}
        className="route-card"
        style={style}
      >
        {this.state.redirect ? <Redirect to={`/route/${id}`} /> : null}
        <RouteInfo>
          <RouteText>
            <span>
              {startingPointValue}
            </span>
            <LocationHr
              emptyDotStyle={{
                background: theme.blue,
                border: `1px solid ${theme.blue}`
              }}
              fullDotStyle={{
                background: theme.blue
              }}
              className="mobileColumn mobileVisible"
              childMargin="0 5px"
              dotsNum="1"
            />
            <Svg
              className="desktopVisible"
              icon="arrow"
              width="30px"
              height="10px"
              style={{ alignSelf: "center", marginRight: "0" }}
            />
            <span>
              {destinationPointValue}
            </span>
          </RouteText>
          <RouteDate>
            {timeAdded}
          </RouteDate>
        </RouteInfo>
        <RouteCta>
          <DetailsButton className="details" href={`/route/` + id}>
            DETAILS
          </DetailsButton>
          <DeleteButton onClick={this.handleDelete}>
            DELETE
            <div />
          </DeleteButton>
        </RouteCta>
      </RouteWrapper>
    );
  }
}

export default Route;
