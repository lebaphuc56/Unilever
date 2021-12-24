import React from 'react'
import { StyleSheet, View, TouchableOpacity ,} from 'react-native';
import { Text } from 'react-native-paper';

const Button = props => {
    return <Text style={{ ...styles.button, ...props.style }}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width:186,
        backgroundColor: "#2190CD",
        borderRadius: 25,
        
    },
    
})

export default Button;