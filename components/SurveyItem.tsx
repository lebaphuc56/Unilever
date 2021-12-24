import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, GestureResponderEvent} from 'react-native'
import Fonts from '../constants/Fonts'


const SurveyItem = (props: { onSelect: (event: GestureResponderEvent) => void; date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelect}>
                <Text style={styles.titles}>Khảo sát mức độ</Text>
            <Text style={styles.title}>{props.date}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default SurveyItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F2F2F2",
        height:73,
        borderRadius:14,
        marginTop:10,
        paddingLeft:15,
        justifyContent:"center"
    },
    titles:{
        ...Fonts.h6
    },
    title:{
        ...Fonts.h11
    }
})
