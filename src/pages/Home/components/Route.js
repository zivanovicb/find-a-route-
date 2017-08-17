import React, { Component } from "react";
import styled, { css } from "styled-components";
import LocationHr from "./LocationHr";
import theme from "../../../theme";
import PropTypes from "prop-types";
import Svg from "./Svg";

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
  margin-bottom: 10px;
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

const Button = css`
  padding:12px 17px;
  border-radius:3px;
  font-size:0.9375rem;
  font-weight:bold;
  letter-spacing: 2px;
  margin-left:10px;
`;
const DetailsButton = styled.a`
  ${props => Button};
  color: ${props => props.theme.green};
  border: 1px solid rgba(112, 211, 175, .35);
  background: rgba(112, 211, 175, .24);
  :hover {
    background: rgba(112, 211, 175, .6);
  }
`;

const DeleteButton = styled.button`
  ${props => Button};
  color: ${props => props.theme.red};
  border: 1px solid rgba(242, 77, 88, .19);
  background: rgba(208, 76, 88, .35);
  :hover {
    background: rgba(208, 76, 88, .6);
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
  handleDelete = () => {
    // updating App.js state
    this.props.handleDelete(this.props.id);
  };
  render() {
    const { id, startingPoint, destinationPoint, timeAdded } = this.props;
    return (
      <RouteWrapper>
        <RouteInfo>
          <RouteText>
            <span>
              {startingPoint.description}
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
              {destinationPoint.description}
            </span>
          </RouteText>
          <RouteDate>
            {timeAdded}
          </RouteDate>
        </RouteInfo>
        <RouteCta>
          <DetailsButton href={`/route/` + id}>DETAILS</DetailsButton>
          <DeleteButton onClick={this.handleDelete}>DELETE</DeleteButton>
        </RouteCta>
      </RouteWrapper>
    );
  }
}

Route.propTypes = {
  id: PropTypes.string.isRequired,
  startingPoint: PropTypes.object.isRequired,
  destinationPoint: PropTypes.object.isRequired
};
export default Route;
