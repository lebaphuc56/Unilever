import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';



const Splash = ({ navigation }: { navigation: any }) => {



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.LogoCDE}  >
                <Text style={styles.TextCDE} onPress={() => navigation.navigate('Login')}>CDE</Text>
                <Text style={styles.TextXCELLENT}>xcellent</Text>
                
            </View>

            <View style={styles.TextPR}>
                <Text>{`        Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy eirmod tempor`}</Text>

            </View>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    LogoCDE: {
        flex: 20,
        alignItem: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    TextCDE: {
        alignSelf: 'center',
        fontSize: 68,
        fontFamily: "Quantify",
        fontStyle: "normal",
        color: "#0081C0"
    },
    TextXCELLENT: {
        fontSize: 46,
        fontFamily: "Quantify",
        fontStyle: "normal",
        color: "#636A6A",
        alignSelf: 'center',
        marginTop: 18,
    },
    TextPR: {
        ...Fonts.h10, flex: 1,
        alignItems: 'center',
        flexDirection: 'column-reverse',
        marginBottom: 40

    },
})
export default Splash;