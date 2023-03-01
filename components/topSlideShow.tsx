import React, { useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    ImageBackground,
} from 'react-native';
// import { Image } from 'expo-image';
// import { useAssets } from 'expo-asset';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from "react-native-reanimated-carousel";
type Slide = {
    id: string;
    title: string;
    image: string;
    tags: string[];
};

type Props = {
    slides: Slide[];
};


const SlideShow: React.FC<Props> = ({ slides }) => {
    const ref = React.useRef<ICarouselInstance>(null);


    // const renderPagination = () => (
    //     <Pagination
    //         carouselRef={carouselRef}
    //         dotStyle={styles.dotStyle}
    //         activeDotStyle={styles.activeDotStyle}
    //     />
    // );
    const PAGE_WIDTH = Dimensions.get('window').width;
    const scrollToIndex = (index: number) => ref.current?.scrollTo({ count: index, animated: true });
    const baseOptions = false
        ? ({
            vertical: true,
            width: PAGE_WIDTH,
            height: PAGE_WIDTH,
        } as const)
        : ({
            vertical: false,
            width: PAGE_WIDTH,
            height: 300,
        } as const);
    return (
        <View style={{position: 'relative', overflow: 'hidden'}}>
            <Carousel
                {...baseOptions}
                loop
                ref={ref}
                // autoPlay={true}
                autoPlayInterval={2000}
                data={slides}
                pagingEnabled={true}
                renderItem={renderItem}
                // style={{height: 300}}
            />
            <View style={{
                position: 'absolute',
                height: 50,
                bottom: 0
            }}>
                <ImageBackground
                    source={require('../assets/images/top-cap.png')}
                    style={{
                    width: PAGE_WIDTH,
                    backgroundColor: 'red',
                    overflow: 'hidden',
                    height: '100%',
                    borderTopEndRadius: 50,
                    borderTopStartRadius: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    >
                {slides.map((slide, index) => (
                    <TouchableOpacity
                        key={slide.id}
                        onPress={() => scrollToIndex(index + 1)}
                    >
                        <View
                            style={{
                                backgroundColor: index === ref.current?.getCurrentIndex() ? '#C6C7D1' : 'transparent',
                                borderWidth: 1, borderColor: '#C6C7D1', width: 10, height: 10, borderRadius: 5, marginHorizontal: 5
                            }}
                        />
                    </TouchableOpacity>
                )
                )}
                </ImageBackground>
            </View>
        </View>
    );
};

const renderItem = ({ item }: { item: Slide }) => {
    return (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.slideImage} />
            <View style={styles.slideTitleContainer}>
                <Text style={styles.slideTitle}>{item.title}</Text>
                <View style={styles.slideTagsContainer}>
                    {item.tags.map(tag => (
                        <Text key={tag} style={styles.slideTag}>
                            {tag}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slide: {
        height: 300,
        width: '100%',
    },
    slideImage: {
        height: 300,
        width: '100%',
    },
    slideTitleContainer: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    slideTitle: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    slideTagsContainer: {
        flexDirection: 'row',
    },
    slideTag: {
        color: '#fff',
        fontSize: 14,
        backgroundColor: '#7A53B2',
        borderRadius: 10,
        overflow: 'hidden',
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginRight: 4,
    },
    pagination: {
        position: 'absolute',
        bottom: 16,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeDotStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#333',
        marginHorizontal: 4,
    },
    buttonPrev: {
        position: 'absolute',
        top: '50%',
        left: 16,
        zIndex: 1,
    },
    buttonNext: {
        position: 'absolute',
        top: '50%',
        right: 16,
        zIndex: 1,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default SlideShow;