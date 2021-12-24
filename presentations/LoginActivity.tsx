import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const Login = ({ navigation }: { navigation: any }) => {

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Centertainer}>
                <Image style={styles.image}

                    source={require('../images/logo.png')} />
            </View>
            <View>
                <View style={{padding:8,marginTop:50}}>
                    <Text style={styles.TextLogin}>Tên đăng nhập</Text>
                    <TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </TouchableOpacity>

                    <Text style={styles.TextPass}>Mật khẩu</Text>
                    <TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder=""
                            keyboardType="numeric"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
                        <Text style={styles.textForgot}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Tab')}
                        style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.TextPR}>
                <Text>{`        Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy eirmod tempor`}</Text>

            </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    Centertainer: {
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 60,
        height: 60,
        marginTop:80,
        
    },
    LogoCDE: {

        marginTop: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItem: 'center',
    },
    TextXCELLENT: {
        fontSize: 46,
        fontFamily: "Quantify",
        fontStyle: "normal",
        color: "#636A6A",
        alignSelf: 'center',
        marginTop: 18,
    },
    TextLogin: {
        marginLeft: 20,
        marginTop: 35,
        fontSize: 18,
        fontFamily: "Montserrat Bold",
        fontStyle: "normal",
        color: "#636A6A"
    },
    TextPass: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        fontFamily: "Montserrat Bold",
        fontStyle: "normal",
        color: "#636A6A"
    },
    TextPR: {
        ...Fonts.h10, 
        alignItems: 'center',
        flexDirection: 'column-reverse', 
        marginTop:140,

    },
    textForgot: {
        fontSize: 15,
        fontFamily: "Muli", fontStyle: "normal",
        color: "#0081C0",
        textAlign: 'right',
        marginRight: 20,
        marginTop: 12,
        textDecorationLine: 'underline',
    },
    input: {
        height: 50,
        margin: 10,
        backgroundColor: Colors.grey,
        padding: 10,
        borderRadius: 15,
        opacity:0.6
    },
    buttonLogin: {
        backgroundColor: Colors.blue,
        height: 50,
        width: 186,
        marginTop: 50,
        borderRadius: 25,
        padding: 12,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonLoginText: {
        ...Fonts.h7,
        alignSelf: 'center',
    },
})
export default Login;
