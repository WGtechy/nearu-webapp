import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ render: Component, ...rest }) => {
  //Here im taking one of the props value from the PrivateRoute
  const token = true;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
