/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const data = ["brown", "orange", "red", "blue", "green"];

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const Slider = ({ slider }) => {
  const [orientation, setOrientation] = useState(false);
  const window = useWindowDimensions();

  useEffect(() => {
    console.log("SLIDER", slider);
  }, []);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
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
            </View>
          ))}
        </ScrollView>
      </View>

      <ImageBackground
        source={require("../assets/images/top-cap.png")}
        style={{
          width: "100%",
          //   overflow: "hidden",
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
    // backgroundColor: 'red',
    // marginTop: 20,
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
});
