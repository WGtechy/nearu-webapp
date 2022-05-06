import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import {privRoutes, pubRoutes} from "../../routes"
import PrivateRoute from "../../comp-files/hoc/PrivateRoute";


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const PrivateRouting = () => {
  // const role = useSelector(state => state.signIn.user.role)
  const role = "user";

  let routes = () => {
    if (role === "user") {
      return pubRoutes;
    } else if (role !== "user") { // Here i must declare the routes of different roles
      return privRoutes;
    }
  };

  return (
    <main className="c-main">
      <Container fluid>
        {/* <Suspense fallback={loading}>
          <Switch>
            {routes().map((route, idx) => {
              return (
                route.component && (
                  <PrivateRoute
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={ route.component }
                  />
                )
              );
            })}
          </Switch>
        </Suspense> */}
      </Container>
    </main>
  );
};

export default React.memo(PrivateRouting);
