import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { Component, useState } from "react";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import GameJsonFile from "./GameJsonFile.json";

const HEIGHT = Dimensions.get("window").height;
const GameSenarioScreen = (props: any) => {
  const [path, setPath] = useState("start");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/slides/woden-angel.png")}
        style={[StyleSheet.absoluteFill]}
      />
      <View>
        <View
          style={{
            width: "100%",
            height: HEIGHT,
          }}
        >
          <ImageBackground
            style={{ flex: 1 }}
            source={require("../assets/images/slides/space-1.png")}
          >
            <View style={styles.backContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => props.navigation.goBack()}
              >
                <AntDesign name="left" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <ImageBackground
            style={{
              flex: 1,
              overflow: "hidden",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingTop: 20,
            }}
            source={require("../assets/images/top-cap.png")}
          >
            <ScrollView style={{ flex: 1 }}>
              <View style={{ padding: 20, paddingTop: -20 }}>
                <Text
                  style={{
                    color: Colors.dark.light,
                    fontFamily: "AdineuePro",
                  }}
                >
                  {GameJsonFile[path].scenario}
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {GameJsonFile[path]?.options.map((item) => {
                    return (
                      <TouchableOpacity
                        style={styles.optionBtn}
                        onPress={() => {
                          console.log("START", item.path);
                          setPath(item.path);
                        }}
                      >
                        <Text
                          style={{
                            color: Colors.dark.light,
                            fontFamily: "AdineuePro",
                          }}
                        >
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    marginTop: 35,
    paddingHorizontal: 10,
  },
  backButton: {
    backgroundColor: "#1B182D",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  backButtonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  optionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: Colors.dark.option,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 7,
    marginTop: 50,
  },
});

export default GameSenarioScreen;
