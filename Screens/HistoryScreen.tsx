import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  View,
  Text,
} from "react-native";

import { DATA } from "../constants/mock";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";

type ItemProps = { title: string; url: any; tags: any };
export default function HistoryScreen() {
  const db = SQLite.openDatabase("game_adventure.db");

  const [historyList, setHistoryList] = useState();
  const [newItem, setNewItem] = useState();
  const [historyItem, setHistoryItem] = useState();

  let list: any;
  const getLikedList = async () => {
    list = await AsyncStorage.getItem("addedPlayedGames");
    setHistoryList(JSON.parse(list).addedPlayedGames);
    setNewItem(JSON.parse(list).addedPlayedGames);
  };
  useEffect(() => {
    getLikedList();
  }, []);

  const Item = ({ title, url, tags }: ItemProps) => (
    <ImageBackground source={{ uri: url }} style={styles.item}>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          backgroundColor: "transparent",
        }}
      >
        <Text style={{ fontSize: 25, color: "white", fontWeight: "500" }}>
          {title}
        </Text>
        <View style={styles.slideTagsContainer}>
          {tags.map((tag: any) => (
            <Text key={tag} style={styles.slideTag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/FBackground.png")}
        style={[styles.image, StyleSheet.absoluteFill]}
      />
      <View style={StyleSheet.absoluteFill}>
        <Text style={styles.header}>Your History</Text>
        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          data={historyList}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  image: {},
  header: {
    marginTop: 35,
    fontSize: 32,
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  item: {
    backgroundColor: "#f9c2ff",
    height: 170,
    borderRadius: 20,
    overflow: "hidden",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
  },
  slideTagsContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  slideTag: {
    color: "#fff",
    fontSize: 14,
    backgroundColor: "#7A53B2",
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 4,
  },
});
