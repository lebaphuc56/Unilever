import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors';
const ToolBarItem = props => {
    return <View style={{ ...styles.toolbar, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    toolbar: {
      
        backgroundColor: Colors.white, 
        height:110,
        width:414,
        flexDirection:"row",
        marginTop:20
    }
})

export default ToolBarItem;