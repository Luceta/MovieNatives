import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import Tabs from "./Tabs";

const RootNav = createNativeStackNavigator();

const Root = () => (
  <RootNav.Navigator
    screenOptions={{ presentation: "modal", headerShown: false }}
  >
    <RootNav.Screen name="Tabs" component={Tabs} />
    <RootNav.Screen name="Stack" component={Stack} />
  </RootNav.Navigator>
);
export default Root;
