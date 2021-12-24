import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DistributorItem = (props: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>
        </View>
    )
}

export default DistributorItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F2F2F2",
        padding:2
    },
    title: {
        fontSize: 16,
        marginLeft: 10,
    }
})
