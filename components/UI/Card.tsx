import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors';

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    card: {
        width:90,
        height:99.69,
        marginLeft:6,
        backgroundColor:Colors.blue,
        borderRadius:12,
        
        
       
    }
})

export default Card