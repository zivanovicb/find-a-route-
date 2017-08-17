import React from "react";
import styled from "styled-components";
import Route from "./Route";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import "./transitions.css";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Routes = ({ routes, deleteRoute }) => {
  console.log("routes", deleteRoute);
  // injecting cb for each route
  const items = renderRoutes(routes, deleteRoute);
  return (
    <Wrapper>
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={0}
        transitionLeaveTimeout={100}
      >
        {items}
      </CSSTransitionGroup>
    </Wrapper>
  );
};

Routes.propTypes = {
  routes: PropTypes.array.isRequired
};

// Route signature: (startingPoint:obj, destinationPoint:obj, timeAdded:str)
const renderRoutes = (routes, deleteRoute) => {
  console.log("rendering routes", deleteRoute);
  return routes.map((item, i) => {
    return (
      <Route
        key={i.toString()}
        id={item.id}
        startingPoint={item.startingPointValue}
        destinationPoint={item.destinationPointValue}
        timeAdded="Today, 20:30"
        handleDelete={deleteRoute}
      />
    );
  });
};
export default Routes;
