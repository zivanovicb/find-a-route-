import React from "react";
import styled from "styled-components";
import Route from "./Route";
import PropTypes from "prop-types";
import "./transitions.css";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Routes = ({ routes, deleteRoute }) => {
  // injecting cb for each route
  const items = renderRoutes(routes, deleteRoute);
  return (
    <Wrapper>
      {items}
    </Wrapper>
  );
};

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  deleteRoute: PropTypes.func.isRequired
};

// Route signature: (startingPoint:obj, destinationPoint:obj, timeAdded:str)
const renderRoutes = (routes, deleteRoute) => {
  return routes.map((item, i) => {
    return (
      <Route
        key={i.toString()}
        id={item.id}
        startingPointValue={item.startingPointValue}
        destinationPointValue={item.destinationPointValue}
        timeAdded={item.dateAdded}
        handleDelete={deleteRoute}
      />
    );
  });
};
export default Routes;
