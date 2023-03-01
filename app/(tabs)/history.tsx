import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Text, View } from '../../components/Themed';
import { DATA } from '../../constants/mock';

type ItemProps = {title: string, url: any, tags: any}
export default function TabTwoScreen() {
  const Item = ({title,  url, tags}: ItemProps) => (
    <ImageBackground source={{uri: url}} style={styles.item} >
      <View style={{position: 'absolute', bottom: 20, left: 20, backgroundColor: 'transparent'}}>
              <Text style={{fontSize: 25, color: 'white', fontWeight: "500"}}>{title}</Text>
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
      <Image source={require('../../assets/images/slides/woden-angel.png')} style={[styles.image, StyleSheet.absoluteFill]} />
      <BlurView intensity={80} style={StyleSheet.absoluteFill}>
        <Text style={styles.header}>Your History</Text>
        <FlatList
          style={{height: '200%'}}
          data={DATA}
          renderItem={({item}) => <Item {...item}/>}
          keyExtractor={item => item.title}
        />
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  image:{},
  header: {
    marginTop: 35,
    fontSize: 32,
    marginLeft: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 200,
    borderRadius:20, 
    overflow: 'hidden',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
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