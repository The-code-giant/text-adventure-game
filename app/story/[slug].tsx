import { BlurView } from 'expo-blur';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HEIGHT = Dimensions.get('window').height;
const Story = (props: any) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/slides/woden-angel.png')} style={[StyleSheet.absoluteFill]} />
            <BlurView intensity={100}>
                <View style={{
                    width: '100%',
                    height: HEIGHT,

                }}>
                    <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/slides/space-1.png')} >
                        <View style={styles.backContainer}>
                            <TouchableOpacity style={styles.backButton} onPress={() => console.log('hiihih')}>
                                <Text style={styles.backButtonText}>back</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <ScrollView style={{ flex: 1 }}>
                        <View style={{padding: 20}}>
                        <Text style={{color: "white"}}>What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                            </View>
                    </ScrollView>
                </View>

            </BlurView>
        </View>
    );
};
export default Story;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backContainer: {
        marginTop: 35,
        paddingHorizontal: 10,
    },
    backButton: {
        backgroundColor: '#1B182D',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    backButtonText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    }

})
