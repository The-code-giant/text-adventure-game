/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";

const { width } = Dimensions.get("window");

const Slider = ({ slider }) => {
  useEffect(() => {
    console.log("SLIDER", slider);
  }, []);
  const scrollValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView
          scrollEnabled
          horizontal
          pagingEnabled
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
            { useNativeDriver: false }
          )}
        >
          {slider.map((x, i) => (
            <View style={[styles.card, { backgroundColor: "gray" }]} key={i}>
              <Image
                source={x.Image}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 1,
                  resizeMode: "contain",
                }}
              />
              <View style={styles.titleTagContainer}>
                <Text style={styles.title}>{x.Name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    // paddingBottom: 10,
                  }}
                >
                  {x.Tag.map((item, index) => {
                    return (
                      <View
                        style={{
                          marginRight: 9,
                          paddingHorizontal: 6,
                          paddingVertical: 2,
                          backgroundColor:
                            index === 0
                              ? "#7A53B2"
                              : "rgba(169, 151, 194, 0.5)",
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
            </View>
          ))}
        </ScrollView>
      </View>

      <ImageBackground
        source={require("../assets/images/top-cap.png")}
        style={{
          width: "100%",
          height: "35%",
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: -40,
        }}
      >
        <View style={styles.indicatorConatiner} pointerEvents="none">
          {slider.map((x, i) => (
            <Indicator x={x} i={i} key={i} scrollValue={scrollValue} />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

function Indicator({ i, scrollValue }) {
  const translateX = scrollValue.interpolate({
    inputRange: [-width + i * width, i * width, width + i * width],
    outputRange: [-20, 0, 20],
  });
  return (
    <TouchableOpacity
      onPress={() => console.log("slider indicator")}
      style={styles.indicator}
    >
      <Animated.View
        style={[styles.activeIndicator, { transform: [{ translateX }] }]}
      />
    </TouchableOpacity>
  );
}

export default Slider;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    height: "95%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "40%",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 20,
  },
  card: {
    width: width,
    height: "100%",
    // marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "blue",
  },
  indicatorConatiner: {
    alignSelf: "center",
    position: "absolute",
    bottom: "88%",
    flexDirection: "row",
  },
  indicator: {
    height: 7,
    width: 7,
    borderRadius: 5,
    backgroundColor: "#00000084",
    borderColor: "#fff",
    borderWidth: 1,
    marginHorizontal: 5,
    overflow: "hidden",
  },
  activeIndicator: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 10,
  },
  titleTagContainer: {
    marginLeft: 20,
    bottom: "43%",
  },

  title: {
    color: Colors.dark.text,
    fontFamily: "AdineueBold",
    marginBottom: 4,
    fontSize: 20,
  },
});
