import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";

import {
  View,
  SafeAreaView,
  Text,
  Platform,
  Image,
  Pressable,
  ColorSchemeName,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeParamList, RootTabParamList, RootTabScreenProps } from "../types";
import HomeScreen from "../Screens/HomeScreen";
import HistoryScreen from "../Screens/HistoryScreen";
import History from "../assets/images/History.svg";
import GameSenarioScreen from "../Screens/GameSenarioScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

//Stack Navigator for navigate to other page
const Stack1 = createStackNavigator<HomeParamList>();
const StackNavigator = () => {
  return (
    <Stack1.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack1.Screen name="Home" component={BottomTabNavigator} />
      <Stack1.Screen name="GameSenarioScreen" component={GameSenarioScreen} />
    </Stack1.Navigator>
  );
};

//Bottom Tab navigator for navigate to other home from page bottom
const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#eee",
        tabBarStyle: { backgroundColor: "#4F415A", overflow: "hidden" },
        headerShown: false,
        headerStyle: { backgroundColor: "#222" },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => (
            // <Ionicons
            //   name={Platform.OS === "android" ? "home" : "ios-home"}
            //   color={color}
            //   size={24}
            // />
            <AntDesign name="home" size={24} color="white" />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryScreen}
        options={({ navigation }: RootTabScreenProps<"History">) => ({
          title: "History ",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="history" size={24} color="white" />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("History")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
    </BottomTab.Navigator>
  );
}
