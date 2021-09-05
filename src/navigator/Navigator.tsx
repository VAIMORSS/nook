import React from "react";
import styled from "styled-components";

/** Navigation */
import { NavigationContainer } from "@react-navigation/native";

/** Screens */
import { createStackNavigator } from "@react-navigation/stack";
import JokeView from "../components/JokeView";
import { navigationRef } from "./RootNavigator";
import BottomNavigator from "./BottomNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Test from "../components/Drawer";

const Stack = createStackNavigator();

const tabScreenOptions = { title: "Welcome", headerShown: false };

const Drawerr = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawerr.Navigator drawerContent={(props) => <Test {...props} />}>
      <Drawerr.Screen name="Joke" component={BottomNavigator} />
    </Drawerr.Navigator>
  );
}

const Navigator = () => {
  return (
    <BottomNavWrapper ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={DrawerNav}
          options={tabScreenOptions}
        />
        <Stack.Screen name="JokeView" component={JokeView} />
      </Stack.Navigator>
    </BottomNavWrapper>
  );
};

const BottomNavWrapper = styled(NavigationContainer)<any>`
  margin-top: 900px;
  display: flex;
  flex-direction: row;
`;

export default Navigator;
