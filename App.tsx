import React, { useEffect } from "react";
import Navigator from "./src/navigator/Navigator";
import { registerForPushNotificationsAsync } from "./src/utils/notification";

export default function App() {
  useEffect(() => {
    try {
      registerForPushNotificationsAsync();
    } catch (e) {
      alert("error retriving the tocken");
    }
  }, []);

  return <Navigator />;
}
