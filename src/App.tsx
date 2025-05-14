import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { people, keypad, timeOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Ionic Dark Mode */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

import { CallScreen, Contacts, Login, RecentCalls } from "./pages";

setupIonicReact();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <IonRouterOutlet>{children}</IonRouterOutlet>;
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Login page route (outside of tabs) */}
        <Route exact path="/">
          <Login />
        </Route>

        {/* Tabbed navigation (only shown after login) */}
        <Route component={Layout}>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/recents">
                <RecentCalls />
              </Route>
              <Route exact path="/call">
                <CallScreen />
              </Route>
              <Route exact path="/contacts">
                <Contacts />
              </Route>
              <Route exact path="/tabs">
                <Redirect to="/call" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="recents" href="/recents">
                <IonIcon aria-hidden="true" icon={timeOutline} />
                <IonLabel>Recent Calls</IonLabel>
              </IonTabButton>
              <IonTabButton tab="call" href="/call">
                <IonIcon aria-hidden="true" icon={keypad} />
                <IonLabel>Dialer</IonLabel>
              </IonTabButton>
              <IonTabButton tab="contacts" href="/contacts">
                <IonIcon aria-hidden="true" icon={people} />
                <IonLabel>Contacts</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
