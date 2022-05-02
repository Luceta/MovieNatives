import React from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { darkTheme, lightTheme } from "./styled";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  const isDark = useColorScheme() === "dark";
  const [loaded] = Font.useFonts(Ionicons.font);
  const [assets] = useAssets(["https://reactnative.dev/img/oss_logo.png"]);
  if (!loaded || !assets) {
    return <AppLoading />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
