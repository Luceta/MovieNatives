import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity } from "react-native";
import { colors } from "../colors";

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>go to two</Text>
  </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text>go to three</Text>
  </TouchableOpacity>
);
const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
    <Text>Go to Search</Text>
  </TouchableOpacity>
);

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        animation: "fade",
        headerTintColor: colors.YELLOW_COLOR,
        headerBackTitleVisible: false,
      }}
    >
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
};

export default Stack;
