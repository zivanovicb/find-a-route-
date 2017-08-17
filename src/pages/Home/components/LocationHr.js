import React from "react";
import styled from "styled-components";
import Svg from "./Svg";

const LocationHr = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  &.mobileColumn {
    @media screen and (max-width: 960px) {
      align-self: start;
    }
  }
  @media screen and (max-width: 960px) {
    flex-flow: column nowrap;
    align-items: center;
    div {
      margin: 5px 0 !important;
    }
  }
`;

const EmptyDot = styled.div`
  margin: ${props => (props.childMargin ? props.childMargin : "0")};
  width: 12px;
  height: 12px;
  background: #ebebeb;
  border-radius: 100%;
`;
const FullDot = styled.div`
  margin-left: 9px;
  margin: ${props => (props.childMargin ? props.childMargin : "0")};
  width: 7px;
  height: 7px;
  background: #ebebeb;
  border-radius: 100%;
`;

const renderDots = (arr, childMargin, fullDotStyle) => {
  return arr.map((item, i) => {
    return <FullDot key={i} style={fullDotStyle} childMargin={childMargin} />;
  });
};

const Hr = ({
  style,
  childMargin,
  dotsNum,
  className,
  emptyDotStyle,
  fullDotStyle
}) => {
  let arr = [];
  for (let i = 0; i < dotsNum; i++) arr[i] = i;
  return (
    <LocationHr className={className} style={style}>
      <EmptyDot style={emptyDotStyle} childMargin={childMargin} />
      {renderDots(arr, childMargin, fullDotStyle)}
      <Svg
        style={{ margin: childMargin }}
        icon="location"
        width="14px"
        height="14px"
      />
    </LocationHr>
  );
};

export default Hr;
