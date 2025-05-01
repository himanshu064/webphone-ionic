import { Redirect, Route } from "react-router-dom";

import { Login } from "@/pages";
import { BottomTabs } from "@/components";
import { AppRoutes } from "@/router/routes";

const Router = () => {
  return (
    <>
      <Route exact path="/">
        <Redirect to={AppRoutes.LoginScreen} />
      </Route>
      <Route exact path={AppRoutes.LoginScreen}>
        <Login />
      </Route>

      <Route path={AppRoutes.TabsPath}>
        <BottomTabs basePath={AppRoutes.TabsPath} />
      </Route>
    </>
  );
};

export default Router;
