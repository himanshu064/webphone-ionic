import { Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { people, timeOutline } from "ionicons/icons";

import { CallScreen, Contacts, RecentCalls } from "@/pages";

const prependBasePath = (path: string, basePath?: string) => {
  if (!basePath) return path;
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
};

export const BottomTabs = ({ basePath }: { basePath?: string }) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={prependBasePath("/call", basePath)}>
          <CallScreen />
        </Route>
        <Route exact path={prependBasePath("/call", basePath)}>
          <CallScreen />
        </Route>
        <Route exact path={prependBasePath("/contacts", basePath)}>
          <Contacts />
        </Route>
        <Route exact path={prependBasePath("/recent-calls", basePath)}>
          <RecentCalls />
        </Route>
      </IonRouterOutlet>
      <IonTabBar
        slot="bottom"
        className="bg-white shadow-md border-t border-t-gray-200"
      >
        <IonTabButton
          tab="contacts"
          className="bg-white"
          href={prependBasePath("/contacts", basePath)}
        >
          <IonIcon aria-hidden="true" icon={people} />
          <IonLabel>Contacts</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="recent-calls"
          className="bg-white"
          href={prependBasePath("/recent-calls", basePath)}
        >
          <IonIcon aria-hidden="true" icon={timeOutline} />
          <IonLabel>Recent Calls</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
