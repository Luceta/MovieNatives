import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tv from "../Screens/Tv";
import Movies from "../Screens/Movie";
import Search from "../Screens/Search";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    // screen Options: 모든 탭에 적용할 옵션이다!
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? colors.BLACK_COLOR : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? colors.BLACK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark
          ? colors.YELLOW_COLOR
          : colors.BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? colors.DARK_GREY : colors.LIGHT_GREY,
        headerStyle: {
          backgroundColor: isDark ? colors.BLACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? colors.YELLOW_COLOR : colors.BLACK_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="film" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-tv" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
