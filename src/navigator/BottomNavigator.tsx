import React from "react";
import { View, StatusBar } from "react-native";

/** Navigation */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/** Screens */
import TabOne from "../screens/TabOne";
import TabTwo from "../screens/TabTwo";
import { STYLES } from "../utils/native-device";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

const tabScreenOptions = { headerShown: false };

export default function BottomNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={STYLES.DARK_CONTENT} animated={true} />
      <View style={{ flex: 1 }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Tab One"
            component={TabOne}
            options={{
              ...tabScreenOptions,
              tabBarIcon: ({ color }: any) => (
                <Icon name="rowing" size={20} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Tab Two"
            component={TabTwo}
            options={{
              ...tabScreenOptions,
              tabBarIcon: ({ color }: any) => (
                <Icon
                  reverse
                  name="ios-american-football"
                  type="ionicon"
                  size={12}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}
