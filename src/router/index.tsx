import { IonRedirect, IonRoute } from "@ionic/react";

import { Login } from "@/pages";
import { BottomTabs } from "@/components";
import { AppRoutes } from "@/router/routes";

const Router = () => {
  return (
    <>
      <IonRoute
        exact
        path="/"
        render={() => <IonRedirect to={AppRoutes.LoginScreen} />}
      />
      <IonRoute
        exact
        path={AppRoutes.LoginScreen}
        render={(props) => <Login {...props} />}
      />

      <IonRoute
        path={AppRoutes.TabsPath}
        render={() => <BottomTabs basePath="/tabs" />}
      />
    </>
  );
};

export default Router;
