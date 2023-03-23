import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import Colors from "../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import * as SQLite from "react-native-sqlite-storage";

const LatestStoriesCard = ({ item, navigation }) => {
  const [addedPlayedGames, setAddedPlayedGames] = useState([]);
  const [historyItem, setHistoryItem] = useState([]);
  const onHandleAddedPlayedGamesToHistory = async () => {
    addedPlayedGames.push(item);
    let list: any = await AsyncStorage.getItem("addedPlayedGames");
    const l = JSON.parse(list);
    console.log("LLLLLLLLLL", list, "LDDDDD");
    let addedPlayedGame: any;
    if (list == null) {
      addedPlayedGame = {
        addedPlayedGames: [item],
      };
      AsyncStorage.setItem("addedPlayedGames", JSON.stringify(addedPlayedGame));
    } else {
      addedPlayedGame = {
        addedPlayedGames: [...JSON.parse(list).addedPlayedGames, item],
      };
      console.log("ITEEEEEEEm3333", addedPlayedGame, "4444");
      AsyncStorage.setItem("addedPlayedGames", JSON.stringify(addedPlayedGame));
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onHandleAddedPlayedGamesToHistory();
        // queryHandler();
        navigation.navigate("GameSenarioScreen");
      }}
      style={styles.latestStoriesCard}
    >
      <Image source={{ uri: item.url }} style={styles.image} />
      <View style={styles.titleTagContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View
          style={{
            flexDirection: "row",
            // paddingBottom: 10,
          }}
        >
          {item.tags.map((item, index) => {
            return (
              <View
                style={{
                  marginRight: 9,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  backgroundColor:
                    index === 0 ? "#7A53B2" : "rgba(169, 151, 194, 0.5)",
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: Colors.dark.text, fontSize: 13 }}>
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  latestStoriesCard: {
    height: "80%",
    width: "17%",
    borderRadius: 25,
    // backgroundColor: "green",
    marginLeft: 15,
    marginTop: 10,
  },
  titleTagContainer: {
    marginLeft: 10,
    bottom: "43%",
  },
  image: {
    height: "95%",
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  title: {
    color: Colors.dark.text,
    fontFamily: "AdineueBold",
    marginBottom: 4,
    fontSize: 15,
  },
});
export default LatestStoriesCard;
