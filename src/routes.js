import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import AllComponenets from "./allcomponenets";

export const BaseRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" component={AllComponenets} />
      </Switch>
    </div>
  );
};
