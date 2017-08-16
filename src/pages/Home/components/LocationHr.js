import React from "react";
import styled from "styled-components";
import Svg from "./Svg";

const LocationHr = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-flow: column nowrap;
    align-items: center;
    div {
      margin: 5px 0 !important;
    }
  }
`;

const EmptyDot = styled.div`
  width: 12px;
  height: 12px;
  background: #ebebeb;
  border-radius: 100%;
`;
const FullDot = styled.div`
  width: 7px;
  height: 7px;
  background: #ebebeb;
  border-radius: 100%;
  margin-left: 9px;
`;

const Hr = ({ style }) =>
  <LocationHr style={style}>
    <EmptyDot />
    <FullDot />
    <FullDot />
    <FullDot />
    <Svg
      style={{ marginLeft: "9px" }}
      icon="location"
      width="14px"
      height="14px"
    />
  </LocationHr>;

export default Hr;
