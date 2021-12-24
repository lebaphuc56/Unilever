import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, TextInput, SectionList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import Colors from '../../constants/Colors';

const demo = ({navigation}:{navigation:any}) => {
    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={styles.HeadContainer} >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image style={{ marginLeft: 16, width: 45, height: 45 }} source={require('../../images/backHome.png')} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#636A6A' }}>LỊCH SỬ VIẾN THĂM</Text>
                    </View>
                    <TouchableOpacity >
                        <Image style={{ marginRight: 16, }} source={require('../../images/menu.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: 382, height: 221, backgroundColor: '#F2F2F2', borderRadius: 16 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0081C0', marginLeft: 21, marginTop: 24 }}>Visit Local Supermarket</Text>
                        <View style={{ flexDirection: 'row', paddingVertical: 10, marginLeft: 21 }}>
                            <Image style={{ borderRadius: 16, marginTop: 5, width: 13, height: 12 }} source={require('../../images/hanle.png')} />
                            <Text style={{ fontSize: 15, fontWeight: 'SemiBold Italic', color: '#F29832', marginLeft: 14 }}>Đang xử lí</Text>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'SemiBold', color: '#636A6A', marginLeft: 21, marginTop: 12 }}>Mô Tả</Text>
                        <Text style={{ fontSize: 17, fontWeight: 'Regular', color: '#636A6A', marginLeft: 21, marginTop: 5 }}>Waves flung themselves at the blue evening. Low light burned on the wet hulks of ships that slipper by mossy pilings into the docks</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 15, marginTop: 21 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'SemiBold' }}>Ghi Chú</Text>
                    <View style={{ width: 382, height: 100, backgroundColor: '#F2F2F2', marginTop: 10, borderRadius: 16 }}>
                        <Text style={{ marginTop: 16, marginLeft: 15, fontSize: 15, fontWeight: 'Italic' }}>Type here...</Text>

                    </View>
                </View>
                <View style={{ backgroundColor: '#ffff', marginTop: 22, marginLeft: 15 }}>
                    <View style={{}}>
                        <Image style={{ width: 284, height: 113 }} source={require('../../images/HotelImage.png')} />

                    </View>



                </View>

                <Text style={styles.textComment}>Bình luận </Text>



                <View style={styles.cardComment}>
                    <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row' }}>
                        <Image
                            source={require('../../images/shapeT.png')} />

                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.textCom1}>Supervisor 1</Text>
                            <Text style={styles.textCom2}>Lorem ipsum dolor sit amet, conset
                                etur sadipscing elitr, sed diam nonumy eirmod</Text>
                        </View>
                    </View>

                    <View>

                    </View>
                </View>

                <View style={styles.cardComment}>
                    <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row' }}>
                        <Image
                            source={require('../../images/shapeT.png')} />

                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.textCom1}>Supervisor 1</Text>
                            <Text style={styles.textCom2}>Lorem ipsum dolor sit amet, conset
                                etur sadipscing elitr, sed diam nonumy eirmod</Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>

                <View style={styles.cardComment}>
                    <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row' }}>
                        <Image
                            source={require('../../images/shapeT.png')} />

                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.textCom1}>Supervisor 1</Text>
                            <Text style={styles.textCom2}>Lorem ipsum dolor sit amet, conset
                                etur sadipscing elitr, sed diam nonumy eirmod</Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
                <View style={{ flex: 1, borderTopWidth: 0.5, marginTop: 10, }}>
                    <TouchableOpacity style={styles.commentContainer}>
                        <Text>Bình luận</Text>
                        <View style={styles.send}>
                            <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: '700' }}>Gửi</Text>
                        </View>
                    </TouchableOpacity>
                </View>





            </ScrollView>
        </SafeAreaView>
    )
}

export default demo

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    HeadContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',


    },
    cardComment: {
        width: 372,
        flexDirection: 'row',
        marginLeft: 18,
        marginTop: 10,
        borderTopWidth: 0.5,



    },
    textComment: {
        padding: 18,
        fontSize: 18,
        fontFamily: 'Bold ',
        opacity: 0.6,
        color: '#636A6A',
        fontWeight: '700'
    },
    textCom1: {
        fontSize: 15,
        fontFamily: 'SemiBold',
        color: Colors.blue,
        marginBottom: 10

    },
    textCom2: {
        marginTop: 10,
        fontSize: 15



    },
    commentContainer: {
        width: 382,
        height: 48,
        marginTop: 30,
        backgroundColor: '#F2F2F2',
        marginLeft: 18,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    send: {
        width: 53,
        height: 30,
        backgroundColor: '#0081C0',
        borderRadius: 16,
        marginLeft: 250,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
