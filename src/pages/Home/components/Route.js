import React from "react";
import styled, { css } from "styled-components";
import LocationHr from "./LocationHr";
import theme from "../../../theme";

const RouteWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 13px 22px;
  background: ${props => props.theme.darkViolet};
  border-radius: 5px;
  color: ${props => props.theme.grey};
  font-size: 1.1rem;
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
  font-size: 0.93em;
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
const Route = ({ startingPoint, destinationPoint, timeAdded }) =>
  <RouteWrapper>
    <RouteInfo>
      <RouteText>
        <span>
          {startingPoint}
        </span>
        <LocationHr
          emptyDotStyle={{
            background: theme.blue,
            border: `1px solid ${theme.blue}`
          }}
          fullDotStyle={{
            background: theme.blue
          }}
          className="mobileColumn"
          childMargin="0 5px"
          dotsNum="1"
        />
        <span>
          {destinationPoint}
        </span>
      </RouteText>
      <RouteDate>
        {timeAdded}
      </RouteDate>
    </RouteInfo>
    <RouteCta>
      <DetailsButton href="/details">DETAILS</DetailsButton>
      <DeleteButton>DELETE</DeleteButton>
    </RouteCta>
  </RouteWrapper>;

export default Route;
