import React, { Component } from "react";
import styled from "styled-components";
import Route from "./Route";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Routes = props => {
  return (
    <Wrapper>
      <Route
        startingPoint="Heroja Pinkija 22, Becmen"
        destinationPoint="California, USA"
        timeAdded="Today, 22:33"
      />
    </Wrapper>
  );
};

export default Routes;
