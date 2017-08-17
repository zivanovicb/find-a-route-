import React from "react";
import styled from "styled-components";
import Route from "./Route";
import PropTypes from "prop-types";

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

Routes.propTypes = {
  routes: PropTypes.array.isRequired
};

// Route signature: (startingPoint:obj, destinationPoint:obj, timeAdded:str)
const renderRoutes = routes => {
  return routes.map((item, i) => {
    console.log(item);
    return (
      <Route
        key={i.toString()}
        id={item.id}
        startingPoint={item.startingPointValue}
        destinationPoint={item.destinationPointValue}
        timeAdded="Today, 20:30"
      />
    );
  });
};
export default Routes;
