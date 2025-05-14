import { Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { people, keypad, timeOutline } from "ionicons/icons";

import { CallScreen, Contacts, RecentCalls } from "@/pages";

const prependBasePath = (path: string, basePath?: string) => {
  if (!basePath) return path;

  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
};

export const BottomTabs = ({ basePath }: { basePath?: string }) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={prependBasePath("/recents", basePath)}>
          <RecentCalls />
        </Route>
        <Route exact path={prependBasePath("/call", basePath)}>
          <CallScreen />
        </Route>
        <Route exact path={prependBasePath("/contacts", basePath)}>
          <Contacts />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton
          tab="recents"
          href={prependBasePath("/recents", basePath)}
        >
          <IonIcon aria-hidden="true" icon={timeOutline} />
          <IonLabel>Recent Calls</IonLabel>
        </IonTabButton>
        <IonTabButton tab="call" href={prependBasePath("/call", basePath)}>
          <IonIcon aria-hidden="true" icon={keypad} />
          <IonLabel>Dialer</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="contacts"
          href={prependBasePath("/contacts", basePath)}
        >
          <IonIcon aria-hidden="true" icon={people} />
          <IonLabel>Contacts</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
