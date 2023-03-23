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
import { useIsFocused } from "@react-navigation/native";

type ItemProps = { title: string; url: any; tags: any };
export default function HistoryScreen() {
  const [historyList, setHistoryList] = useState();
  let list: any;
  const getHistoryList = async () => {
    list = await AsyncStorage.getItem("addedPlayedGames");
    setHistoryList(JSON.parse(list).addedPlayedGames);
    // setNewItem(JSON.parse(list).addedPlayedGames);
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getHistoryList();
    }
  }, [isFocused]);
  const Item = ({ item }) => (
    <ImageBackground source={{ uri: item.url }} style={styles.item}>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          backgroundColor: "transparent",
        }}
      >
        <Text style={{ fontSize: 25, color: "white", fontWeight: "500" }}>
          {item.title}
        </Text>
        <View style={styles.slideTagsContainer}>
          {item.tags.map((tag: any, index: number) => (
            <Text
              key={tag}
              style={[
                styles.slideTag,
                {
                  backgroundColor:
                    index > 0 ? "rgba(169, 151, 194, 0.5)" : "#7A53B2",
                },
              ]}
            >
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
          contentContainerStyle={{ paddingBottom: 20 }}
          data={historyList}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item, index) => item.id}
          ListEmptyComponent={() => {
            return (
              <Text
                style={{
                  fontFamily: "AdineueBold",
                  fontSize: 18,
                  alignSelf: "center",
                  color: "white",
                  margin: 30,
                  marginTop: 100,
                }}
              >
                Have not played any game yet!
              </Text>
            );
          }}
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
