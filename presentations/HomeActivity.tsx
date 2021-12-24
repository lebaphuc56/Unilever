import React, { useRef, useState } from 'react'
import { Button, Dimensions, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import ToolBar from '../components/UI/ToolBar'
import Card from '../components/UI/Card';
import ToolBarItem from '../components/UI/ToolBarItem';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
const { width } = Dimensions.get("screen");
const news1 = require('../images/new1.png');
const news2 = require('../images/new2.png');
const news3 = require('../images/new3.png');
const news4 = require('../images/new4.png');
const video1 = require('../images/video1.png');
const video2 = require('../images/video2.png');
const video3 = require('../images/video3.mp4');

const News = [
    { id: 1, image: news2, name: 'Lorem ipsum dolor sit', note: 'Lorem ipsum dolor sit amet , consetetur sadipscing elitr,sed diam nonumy eirmod tempor' },
    { id: 2, image: news1, name: 'Lorem ipsum dolor sit', note: 'Lorem ipsum dolor sit amet , consetetur sadipscing elitr,sed diam nonumy eirmod tempor' },
    { id: 3, image: news3, name: 'Lorem ipsum dolor sit', note: 'Lorem ipsum dolor sit amet , consetetur sadipscing elitr,sed diam nonumy eirmod tempor' },
    { id: 4, image: news4, name: 'Lorem ipsum dolor sit', note: 'Lorem ipsum dolor sit amet , consetetur sadipscing elitr,sed diam nonumy eirmod tempor' },
]
const video = [
    { id: 1, image: video1, name: 'Lorem ipsum dolor tamet,consetetur sadipscing elitr', date: '1/10/2019-11:19AM' },
    { id: 2, image: video2, name: 'Lorem ipsum dolor tamet,consetetur sadipscing elitr', date: '1/10/2019-11:19AM' },
    { id: 3, image: video3, name: 'Lorem ipsum dolor tamet,consetetur sadipscing elitr', date: '1/10/2019-11:19AM' },
]
const Home = ({ navigation }: { navigation: any }) => {
    const [listNews, setlistNews] = useState(News)
    const [listvideo, setlistvideo] = useState(video)

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("right");
    const changeDrawerPosition = () => {
        if (drawerPosition === "left") {
            setDrawerPosition("right");
        } else {
            setDrawerPosition("left");
        }
    };

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );

    const renderItem = ({ item }: { item: any }) => {
        return (
            <TouchableOpacity
            onPress={()=>navigation.navigate('DetaiNewsHome',{item})}
                style={{
                    height: 260,
                    width: 186,
                    padding: 12,
                    marginBottom: 10,
                    marginTop: 10,
                    marginHorizontal: 4

                }}
            >
                <View>
                    <Image
                        style={{ height: 153, width: 190, }}
                        source={item.image}
                        resizeMode="cover"
                    />
                    <View
                        style={{

                        }}>


                        <Text
                            style={{
                                fontSize: 15, fontWeight: '700', marginLeft: 10,
                            }}>
                            {item.name}{' '}
                        </Text>
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: 13
                        , marginLeft: 10,
                    }}>
                    {item.note}
                </Text>
                {/* <Text
          style={{
            fontSize: 15,
          }}>
          Quà tặng:{item.gift}{' '}
        </Text> */}
            </TouchableOpacity>

        );
    };

    const renderItem1 = ({ item }: { item: any }) => {
        return (

            <TouchableOpacity 
            onPress={()=>navigation.navigate('DetaiVideoHome',{item})}
            style={{
                width: 382, height: 111, marginBottom: 10,
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ height: 111, width: 159, marginLeft: 16 }}
                        source={item.image}
                        resizeMode="cover"
                    />



                    <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>

                        <Text
                            style={{
                                fontSize: 15, fontWeight: '700',
                            }}>

                            {item.name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 13, marginTop: 5
                            }}>
                            {item.date}
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }

    return (


        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >

            <ToolBar>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                >
                    <View style={styles.viewToolbar}>
                        <Image style={{ width: 50, height: 50, marginTop: 20 }}
                            source={require('../images/programmer.png')} />

                        <View style={{ padding: 10 }} >
                            <Text style={styles.textToolbar}>Nhân Viên </Text>
                            <Text style={{ fontWeight: 'bold', color: Colors.white, fontSize: 20 }}>Nguyễn Văn A</Text>
                            <Text style={styles.textToolbar}>Ngày gia nhập: 28/9/2021</Text>
                        </View>


                    </View>
                </TouchableOpacity>

                <Image style={{ width: 90, height: 90, marginTop: 40, }}
                    source={require('../images/logo2.png')} />


            </ToolBar>

            <SafeAreaView style={{ alignContent: 'center', justifyContent: 'center', padding: 12 }}>
                <ToolBarItem>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Booking')}
                    >

                        <Card >
                            <Image style={{ width: 35, height: 35, marginLeft: 30, marginTop: 20 }}
                                source={require('../images/calendar.png')} />

                            <Text style={styles.textItemCard}>Đặt lịch</Text>
                        </Card>


                    </TouchableOpacity>




                    <TouchableOpacity
                        onPress={() => navigation.navigate('CreateTask')}
                    >

                        <Card >
                            <Image style={{ width: 35, height: 35, marginLeft: 30, marginTop: 20 }}
                                source={require('../images/clipboard.png')} />
                            <Text style={styles.textItemCard}>Tạo task</Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ListHistory')}
                    >

                        <Card >
                            <Image style={{ width: 35, height: 35, marginLeft: 30, marginTop: 20 }}
                                source={require('../images/history.png')} />
                            <Text style={styles.textItemCard}>Lịch sử</Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notification')}
                    >

                        <Card >
                            <Image style={{ width: 35, height: 35, marginLeft: 30, marginTop: 20 }}
                                source={require('../images/bell.png')} />
                            <Text style={styles.textItemNodi}>Thông báo</Text>
                        </Card>
                    </TouchableOpacity>

                </ToolBarItem>

            </SafeAreaView>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <StatusBar translucent={true} backgroundColor={'transparent'} hidden={true} />




                <View style={styles.imgTop}>


                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}


                    >
                        <View >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Bathroom')}
                            >
                                <View style={{ width: 400, height: 240, borderRadius: 12, borderColor: '#dddd', padding: 12, marginLeft: 8 }}>

                                    <View style={{ flex: 2 }}>

                                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20 }}
                                            source={require('../images/milk.jpg')} />

                                    </View>
                                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>


                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Bathroom')}
                            >
                                <View style={{ width: 370, height: 240, borderRadius: 12, borderColor: '#dddd', padding: 8 }}>

                                    <View style={{ flex: 2 }}>

                                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20 }}
                                            source={require('../images/classic.jpg')} />

                                    </View>
                                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>


                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Bathroom')}
                            >
                                <View style={{ width: 370, height: 240, borderRadius: 12, borderColor: '#dddd', padding: 8 }}>

                                    <View style={{ flex: 2 }}>

                                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20 }}
                                            source={require('../images/fire.jpg')} />

                                    </View>
                                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>


                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Bathroom')}
                            >
                                <View style={{ width: 370, height: 240, borderRadius: 12, borderColor: '#dddd', padding: 8 }}>

                                    <View style={{ flex: 2 }}>

                                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20 }}
                                            source={require('../images/coconut.jpg')} />

                                    </View>
                                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>


                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>




                </View>

                <Text style={{ fontSize: 18, fontFamily: 'Montserrat Bold', textAlign: 'center', padding: 12 }}>NEWS</Text>

                <View>
                    <FlatList
                        data={listNews}

                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                        //  contentContainerStyle={{
                        //     paddingHorizontal: 20,
                        //     paddingBottom: 30,
                        //   }}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}


                    />
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Montserrat Bold', textAlign: 'center', padding: 12 }}>VIDEOS</Text>
                <View>
                    <FlatList
                        data={listvideo}

                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem1}

                    />
                </View>

            </ScrollView>


        </SafeAreaView >









    );
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textToolbar: {
        color: Colors.white,
        fontSize: 15,
        fontWeight: '600',
        opacity: 0.9

    },
    viewToolbar: {
        padding: 30,
        flexDirection: 'row'


    },
    textlive: {
        fontSize: 42,
    },
    scrollView2: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    viewToolbarItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    imgTop: {
        alignItems: 'center',

    },
    scrollView: {
        backgroundColor: Colors.black,
        width: '100%',

    },
    textNews: {
        textAlign: 'center',
        justifyContent: 'center',
        ...Fonts.h3,
        marginTop: 10

    },
    textItemCard: {
        color: Colors.white,
        fontFamily: 'Mulish',
        textAlign: 'center',
        padding: 12,
        fontSize: 15

    },
    textItemNodi: {
        color: Colors.white,
        fontFamily: 'Mulish',
        textAlign: 'center',
        padding: 12,
        fontSize: 13

    },
    text: {
        fontSize: 43
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    }
})