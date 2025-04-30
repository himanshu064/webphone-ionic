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

import CallScreenPage from "@/pages/CallScreen";
import ContactsPage from "@/pages/Contacts";
import RecentCalls from "@/pages/RecentCalls";
import CallScreen from "@/pages/CallScreen";

const prependBasePath = (path: string, basePath?: string) => {
  if (!basePath) return path;
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
};

const BottomTabs = ({ basePath }: { basePath?: string }) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={prependBasePath("/call", basePath)}>
          <CallScreen />
        </Route>
        <Route exact path={prependBasePath("/call", basePath)}>
          <CallScreenPage />
        </Route>
        <Route exact path={prependBasePath("/contacts", basePath)}>
          <ContactsPage />
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

export default BottomTabs;

{
  /* <IonFooter className="ion-no-border h-14 border-t border-gray-200 bg-white">
        <div className="flex h-full">
          <button className="flex-1 flex flex-col items-center justify-center text-gray-500">
            <IonIcon icon={personCircle} className="text-xl" />
            <span className="text-xs mt-1">Contacts</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center text-purple-600">
            <IonIcon icon={call} className="text-xl" />
            <span className="text-xs mt-1">Calls</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center text-gray-500">
            <IonIcon icon={chatbubble} className="text-xl" />
            <span className="text-xs mt-1">Chats</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center text-gray-500">
            <IonIcon icon={settings} className="text-xl" />
            <span className="text-xs mt-1">Settings</span>
          </button>
        </div>
      </IonFooter> */
}
