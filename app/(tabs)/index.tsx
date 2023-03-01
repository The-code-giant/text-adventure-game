import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import SlideShow from '../../components/topSlideShow';
const SLIDE_DATA = [
  {
    id: 1,
    title: 'Slide 1',
    image: require('../../assets/images/slides/wizard-1.png'),
    tags: ['10 mins', 'Fantasy'],
  },
  {
    id: 2,
    title: 'Slide 2',
    image: require('../../assets/images/slides/space-1.png'),
    tags: ['14 mins', 'si-fi'],
  },
  {
    id: 3,
    title: 'Slide 3',
    image: require('../../assets/images/slides/woden-angel.png'),
    tags: ['8 mins', 'Fantasy'],
  },
];
export default function TabOneScreen() {
  return (
   <View>
      <SlideShow slides={SLIDE_DATA} />
      <ImageBackground source={require('../../assets/images/Content.png')}>
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
