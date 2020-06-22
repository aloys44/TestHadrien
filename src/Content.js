import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// routes config
import routes from "./routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Content = () => {
  return (
    <>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
          <Redirect from="/" to="/Accueil" />
        </Switch>
      </Suspense>
    </>
  );
};

export default React.memo(Content);
