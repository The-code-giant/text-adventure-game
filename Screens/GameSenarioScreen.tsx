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
import React, {useState } from "react";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import GameJsonFile from "./GameJsonFile.json";

const HEIGHT = Dimensions.get("window").height;
const GameSenarioScreen = (props: any) => {
  const [path, setPath] = useState("start");
  let [counter, setCounter] = useState(0);
  const [imageUrl, setImageUrl] = useState(
    require("../assets/images/slides/wizard-1.png")
  );
  const [history, setHistory] = useState([
    {
      Image: require("../assets/images/slides/wizard-1.png"),
    },
    {
      Image: require("../assets/images/game1.png"),
    },
    {
      Image: require("../assets/images/game2.png"),
    },
    {
      Image: require("../assets/images/game3.png"),
    },
    {
      Image: require("../assets/images/game4.png"),
    },
    {
      Image: require("../assets/images/game5.png"),
    },
    {
      Image: require("../assets/images/game6.png"),
    },
    {
      Image: require("../assets/images/game6.png"),
    },
    {
      Image: require("../assets/images/s2.png"),
    },
    {
      Image: require("../assets/images/game8.png"),
    },
  ]);
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
          <ImageBackground style={{ flex: 1 }} source={imageUrl}>
            <View style={styles.backContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  props.navigation.goBack();
                }}
              >
                <AntDesign name="left" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.backgroundImg}
            source={require("../assets/images/sb.png")}
          >
            <Image
              source={require("../assets/images/rt.png")}
              style={styles.modalImg}
            />
            <ScrollView style={{ flex: 1 }}>
              <View style={{ padding: 20, paddingTop: -20 }}>
                <Text
                  style={{
                    color: Colors.dark.light,
                    fontFamily: "AdineuePro",
                    lineHeight: 17,
                    marginTop: 10,
                  }}
                >
                  {GameJsonFile[path].scenario}
                </Text>
                <ScrollView
                  style={{ marginBottom: 50 }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {GameJsonFile[path]?.options.map((item) => {
                    return (
                      <TouchableOpacity
                        style={styles.optionBtn}
                        onPress={() => {
                          setCounter(item.path == path ? counter : counter + 1);
                          if (counter >= 10) {
                            setCounter(0);
                          }

                          setPath(item.path);
                          setImageUrl(history[counter].Image);
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
  backgroundImg: {
    flex: 1,
    overflow: "hidden",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    marginTop: -30,
    marginBottom: -50,
  },
  modalImg: {
    width: "20%",
    alignSelf: "center",
    borderRadius: 10,
    height: 3,
    marginTop: -5,
  },
});

export default GameSenarioScreen;
