import React from 'react';
import { StyleSheet, FlatList, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import Carousel from "react-native-reanimated-carousel";
import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
import { BlurView } from 'expo-blur';
import { DATA } from '../constants/mock';
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
import { Link } from "expo-router";

export default function EditScreenInfo({ path }: { path: string }) {
  const viewCount = 5;
  const _renderItem = ({ item, index }: { index: number, item: { tags: any,title: string, text: string, url: string } }) => {
    return (
      <BlurView intensity={4} >
        <View style={{
            position: 'relative',
            width: ITEM_WIDTH,
             borderRadius: 25, overflow: 'hidden', backgroundColor: 'red'
           }}
          >
          <ImageBackground
            source={{
              uri: item.url,
            }}
            style={{ width: 350, height: 210, borderRadius: 20 }}
          >
            <View style={{position: 'absolute', bottom: 20, left: 20, backgroundColor: 'transparent'}}>
              <Link href={`/story/${item.title}`}>
               <Text style={{fontSize: 25, color: 'white', fontWeight: "500"}}>{item.title}</Text>
              </Link>
              <View style={styles.slideTagsContainer}>
                    {item.tags.map((tag: any) => (
                        <Text key={tag} style={styles.slideTag}>
                            {tag}
                        </Text>
                    ))}
                </View>
            </View>
          </ImageBackground>
        </View>
      </BlurView>
    );
  }
  return (
    <ScrollView
      style={{ marginHorizontal: 20, flexGrow: 1 }}
    >
      <View style={{backgroundColor: 'transparent'}}>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 15, color: 'white' }}> Latest Stories</Text>
        <Carousel
          pagingEnabled={true}
          snapEnabled={true}
          width={Dimensions.get('window').width}
          height={210}
          customConfig={() => ({ type: "positive", viewCount })}
          modeConfig={{
            snapDirection: "left",
            stackInterval: 40
          }}
          data={DATA}
          renderItem={_renderItem}
          loop
          mode={"horizontal-stack"}
        />
      </View>
      <View style={{ marginTop: 20, backgroundColor: 'transparent' }}>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 15, color: 'white' }}>Science-fiction</Text>
        <Carousel
          pagingEnabled={true}
          snapEnabled={true}
          width={Dimensions.get('window').width}
          height={300}
          customConfig={() => ({ type: "positive", viewCount })}
          modeConfig={{
            snapDirection: "left",
            stackInterval: 40
          }}
          data={DATA}
          renderItem={_renderItem}
          loop
          mode={"horizontal-stack"}
        />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  slideTagsContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
},
slideTag: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: '#7A53B2',
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 4,
},
});
