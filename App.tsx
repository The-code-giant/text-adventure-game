import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./AppNavigator/Navigation";
import HomeScreen from "./Screens/HomeScreen";
import * as Font from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    AdineueBold: require("./assets/fonts/adineue-PRO-Bold.ttf"),
    AdineuePro: require("./assets/fonts/adineue-PRO.ttf"),
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
