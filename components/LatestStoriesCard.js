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
import * as SQLite from "expo-sqlite";

const LatestStoriesCard = ({ item, navigation }) => {
  const db = SQLite.openDatabase("game_adventure.db");
  const [addedPlayedGames, setAddedPlayedGames] = useState([]);
  const [historyItem, setHistoryItem] = useState([]);
  const onHandleAddedPlayedGamesToHistory = async () => {
    addedPlayedGames.push(item);
    let addedPlayedGame = {};
    if (historyItem.length < 1) {
      addedPlayedGame = {
        addedPlayedGames: [...addedPlayedGames],
      };
    } else {
      addedPlayedGame = {
        addedPlayedGames: [...historyItem, ...addedPlayedGames],
      };
    }

    await AsyncStorage.setItem(
      "addedPlayedGames",
      JSON.stringify(addedPlayedGame)
    );
    list = await AsyncStorage.getItem("addedPlayedGames");
    setHistoryItem(JSON.parse(list).addedPlayedGames);
    console.log(
      "ITEEEEEEEEEEM",
      addedPlayedGame,
      "222222222",
      historyItem,
      "44444444"
    );
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
      <Image
        source={{ uri: item.url }}
        style={{
          height: "95%",
          width: "100%",
          alignSelf: "center",
          marginTop: 20,
          borderRadius: 10,
        }}
      />
      <View style={styles.titleTagContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{ flexDirection: "row" }}>
          {item.tags.map((item, index) => {
            return (
              <View
                style={{
                  marginRight: 9,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  backgroundColor: index === 0 ? "#7A53B2" : "#cbbdde",
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
    bottom: 50,
  },
  title: {
    color: Colors.dark.text,
    fontFamily: "AdineueBold",
    marginBottom: 4,
    fontSize: 15,
  },
});
export default LatestStoriesCard;
