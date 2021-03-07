import React from "react";
import * as lib from "../dependencies";
import { AVANTICA } from "../components";
import IndexScreen from "./Index";
import AuthScreen from "./Auth";
import MeetingScreen from "./Meeting";
import NotificationScreen from "./Notification";
import AboutScreen from "./About";

export default function Screens() {
  const IndexStack = lib.createStackNavigator();
  function IndexStackScreen() {
    return (
      <IndexStack.Navigator>
        <IndexStack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: "Welcome" }}
        />
      </IndexStack.Navigator>
    );
  }

  const MeetingsStack = lib.createStackNavigator();
  function MeetingsStackScreen() {
    return (
      <MeetingsStack.Navigator>
        <MeetingsStack.Screen
          name="Index"
          component={MeetingScreen}
          options={{ title: "Meetings" }}
        />
      </MeetingsStack.Navigator>
    );
  }

  const NotificationStack = lib.createStackNavigator();
  function NotificationStackScreen() {
    return (
      <NotificationStack.Navigator>
        <NotificationStack.Screen
          name="Index"
          component={NotificationScreen}
          options={{ title: "Notification" }}
        />
      </NotificationStack.Navigator>
    );
  }

  const AboutStack = lib.createStackNavigator();
  function AboutStackScreen() {
    return (
      <AboutStack.Navigator>
        <AboutStack.Screen
          name="Index"
          component={AboutScreen}
          options={{ title: "About" }}
        />
      </AboutStack.Navigator>
    );
  }

  const Drawer = lib.createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      drawerContent={(props) => <AVANTICA.DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Auth"
        component={AuthScreen}
        options={{ gestureEnabled: false }}
      />
      <Drawer.Screen name="Index" component={IndexStackScreen} />
      <Drawer.Screen name="Meetings" component={MeetingsStackScreen} />
      <Drawer.Screen name="Notification" component={NotificationStackScreen} />
      <Drawer.Screen name="About" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
}
