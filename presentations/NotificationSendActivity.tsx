import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,TouchableOpacity, View, Image, TextInput } from 'react-native';


import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import ToolBarItem from '../components/UI/ToolBarItem';
import ToolBar from '../components/UI/ToolBar';

const NotificationSend  = ({navigation}: {navigation: any}) => {
  return (
   
<ScrollView>
        <View style = {styles.container}>
            <ToolBarItem style = {styles.Toolbar}>
                <TouchableOpacity style ={styles.btnBack} onPress={() => navigation.goBack()}>
                    {/* <FontAwesome name = "angle-left" size={30} color={Colors.blue}/> */}
                    <Image source = {require('../images/back.jpg')}/> 
                </TouchableOpacity>
                <Text style = {styles.test}>THÔNG BÁO</Text>
                <TouchableOpacity style ={styles.btnMenu} onPress={() => navigation.goBack()}>
                    {/* <FontAwesome name = "fa-solid fa-bars-sort" size={30} color={Colors.blue}/> */}
                    <Image source = {require('../images/menu.jpg')}/> 
                </TouchableOpacity>
            </ToolBarItem>
      
        <View>
            <Text style = {styles.textTieuDe}>Người gửi</Text>
            <Text style={styles.textNguoiGui}>  Craig Mendez</Text>
            <View>
            <Text style = {styles.textTieuDe}>Tiêu đề</Text>
            
            <View style = {styles.textIP}>
          <Text style={styles.TextNV}>
          [ATTENTION] RANDOM TITLE
          </Text>
            </View>
            </View>
            <Text style = {styles.textTieuDe}>Nội dung</Text>
            <View style={styles.textMota}>
                <Text style={styles.TextMota1}>{  `The waves flung up against the purple glow of 
double sleepless ness `}</Text>
            </View>

            
        </View>
        
            <TouchableOpacity style = {styles.btnLuu} onPress={() => navigation.navigate('Tab')}>
            <Text style = {styles.textluu}>GỬI</Text>
            </TouchableOpacity>
                
        </View> 
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    Toolbar: {
        alignItems: 'center',
    },
   
    tick: {
        
    },
    test: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        marginLeft: 87,
        ...Fonts.h5,
    },
    textNguoiGui:{
        marginLeft:1,
        ...Fonts.h3,
    },
    btnMenu: {
        height: 40,
        width: 30, 
        marginLeft:100,
        alignItems:'stretch',
        marginTop: 15
        
    },
    btnBack: {
       
        marginLeft:10,
        
    },
    
    textGiaoViec: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 20
    },
    textTieuDe: {
        marginLeft: 10,
        marginTop: 20,
        ...Fonts.h8,
    },
    textIP: {
        borderRadius: 15,
        marginTop: 5,
        width: 382,
        fontWeight:'bold',
        color:'#636A6A',
        fontFamily:'Muli',
        alignSelf: 'center',
        backgroundColor: Colors.grey,

    },
    textMota: {
        borderRadius: 15,
        marginTop: 5,
        width: 382,
        fontSize:15,
        fontWeight:'bold',
        alignSelf: 'center',
        fontFamily:"Muli",
        backgroundColor: Colors.grey,
        height: 100,
        textAlignVertical: 'top'
         
    },
    TextMota1:{
        padding:15,
       ...Fonts.h10,
    },
    TextNV:{
        fontWeight:'bold',
        padding:15,
        ...Fonts.h8,
    },
    dayStart: {
        marginTop: 10,
        marginLeft: 15,
        ...Fonts.h4
    },
   
    btnLuu: {
        backgroundColor: Colors.blue,
        height: 50,
        width: 382,
        marginTop: 84,
        borderRadius: 25,
        padding: 12,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textluu:{
        ...Fonts.h7,
        alignSelf: 'center',
    },
})



export default NotificationSend;