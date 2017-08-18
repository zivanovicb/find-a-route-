import React, { Component } from "react";
import styled from "styled-components";
import Svg from "../../Home/components/Svg";
import DeleteButton from "../../../components/DeleteButton";

const Wrapper = styled.div`
  width: 100%;
  min-width: 100%;
  height: 80px;
  padding: 15px 0;
  background: ${props => props.theme.darkViolet};
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;
  overflow: hidden;
  opacity: .98;
  @media screen and (max-width: 970px) {
    height: auto;
    padding: 25px 0;
  }
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 0 10px;
  }
  @media screen and (max-width: 970px) {
    flex-flow: column nowrap;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const TopBar = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <p>
            {data.startingPointValue}
          </p>
          <Svg
            style={{ margin: "0 20px" }}
            icon="arrow"
            height="15px"
            width="25px"
            fill="#70d3af"
          />
          <p>
            {data.destinationPointValue}
          </p>
        </Flex>

        <Flex>
          <Svg
            style={{ margin: "0 20px" }}
            icon="road"
            height="15px"
            width="25px"
            fill="#70d3af"
          />
          <p>Distance : </p>

          <p style={{ marginLeft: "5px" }}>
            {data.route.routes[0].legs[0].distance.text}
          </p>
        </Flex>

        <Flex>
          <Svg
            style={{ margin: "0 20px", bottom: "5px" }}
            icon="clock"
            height="15px"
            width="25px"
            fill="#70d3af"
          />
          <p>Travel time : </p>

          <p style={{ marginLeft: "5px" }}>
            {data.route.routes[0].legs[0].duration.text}
          </p>
        </Flex>
        <Flex>
          <DeleteButton>DELETE</DeleteButton>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default TopBar;
