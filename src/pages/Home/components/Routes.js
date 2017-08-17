import React from "react";
import styled from "styled-components";
import Route from "./Route";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Routes = ({ routes }) => {
  return (
    <Wrapper>
      {renderRoutes(routes)}
    </Wrapper>
  );
};

// Route signature: (startingPoint:obj, destinationPoint:obj, timeAdded:str)
const renderRoutes = routes => {
  return routes.map((item, i) => {
    return (
      <Route
        key={i.toString()}
        startingPoint={item.startingPoint}
        destinationPoint={item.destinationPoint}
        timeAdded="Today, 20:30"
      />
    );
  });
};
export default Routes;
