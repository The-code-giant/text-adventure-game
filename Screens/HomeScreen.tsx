import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Slider from "../components/Slider";
import LatestStoriesCard from "../components/LatestStoriesCard";
import { DATA } from "../constants/mock";
import { ScrollView } from "react-native";

const HomeScreen = (props: any) => {
  const [slider, setSlider] = useState([
    {
      ID: "1",
      Image: require("../assets/images/slides/wizard-1.png"),
      Name: "Wizarding Wars",
      Tag: ["10 mins", "Fantasy"],
    },
    {
      ID: "2",
      Image: require("../assets/images/slides/space-1.png"),
      Name: "Viktor’s Memories",
      Tag: ["10 mins", "Fantasy"],
    },
    {
      ID: "3",
      Image: require("../assets/images/slides/woden-angel.png"),
      Name: "The Autumn Witch",
      Tag: ["10 mins", "Fantasy"],
    },
  ]);
  console.log("LLLSLSLSLS", slider);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text style={styles.text}>HomeScreen</Text> */}
      <Slider slider={slider} />
      {/* <View style={{ height: 300, backgroundColor: "green" }}></View> */}
      <ImageBackground
        source={require("../assets/images/Content.png")}
        style={{
          flex: 1,
          marginTop: -40,
        }}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <Text style={styles.title}>Latest Stories</Text>
          <ScrollView
            style={{ height: 150 }}
            scrollEnabled={true}
            horizontal={true}
            // style={{ backgroundColor: "green" }}
            contentContainerStyle={{ paddingRight: 130, marginRight: 100 }}
          >
            {DATA.map((item) => (
              <LatestStoriesCard item={item} navigation={props.navigation} />
            ))}
          </ScrollView>
          <Text style={styles.title}>Science-fiction</Text>
          <ScrollView
            style={{ height: 150 }}
            scrollEnabled={true}
            horizontal={true}
            // style={{ backgroundColor: "green" }}
            contentContainerStyle={{ paddingRight: 130, marginRight: 100 }}
          >
            {DATA.map((item) => (
              <LatestStoriesCard item={item} navigation={props.navigation} />
            ))}
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    marginLeft: 20,
  },
  title: {
    marginLeft: 20,
    color: "white",
    fontFamily: "AdineueBold",
    marginTop: 10,
    marginBottom: -15,
    fontSize: 16,
  },
});
export default HomeScreen;
