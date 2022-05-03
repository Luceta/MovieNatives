import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../colors";
import Detail from "../Screens/Detail";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        animation: "fade",
        headerTintColor: colors.YELLOW_COLOR,
        headerBackTitleVisible: false,
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
    </NativeStack.Navigator>
  );
};

export default Stack;
