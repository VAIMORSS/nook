import * as Notifications from "expo-notifications";
import React, { useEffect, useRef } from "react";
import { Button } from "react-native-paper";
import * as RootNavigation from "../navigator/RootNavigator";
import { JokeDataType } from "../types";
import { api } from "./../utils/index";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

interface GetNotificationButtonType {
  toggleDrawer: () => void;
}

export default function GetNotificationButton(
  props: GetNotificationButtonType
) {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    (responseListener.current as any) =
      Notifications.addNotificationResponseReceivedListener((response) => {
        (RootNavigation as any).navigate("JokeView", {
          joke: response.notification.request.content,
        });
      });
    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current as any
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription &&
        Notifications.removeNotificationSubscription(
          responseListener.current as any
        );
    };
  }, []);

  const onGetJoke = async () => {
    const joke = await api.joke.getJoke();
    if (joke.error) {
      alert("there was some error getting the funniest joke");
    } else {
      schedulePushNotification(joke.data);
      props.toggleDrawer();
    }
  };

  return (
    <Button
      onPress={onGetJoke}
      icon="bell"
      mode="contained"
      style={{ width: 200, backgroundColor: "#0328fa", height: 36 }}
      accessibilityLabel="Learn more about this purple button"
    >
      Get Notifications
    </Button>
  );
}

async function schedulePushNotification(joke: JokeDataType) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got a new Jock 😂",
      body: joke.punchline,
      data: { data: joke },
    },
    trigger: { seconds: 1 },
  });
}
