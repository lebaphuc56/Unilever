import React from 'react';
import { StyleSheet, Text, ScrollView,TouchableOpacity, View, Image, TextInput } from 'react-native';
import ToolBar from '../../components/UI/ToolBar';
import FONTS from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import ToolBarItem from '../../components/UI/ToolBarItem';

const Notification  = ({navigation}: {navigation: any}) => {
  return (
   
<ScrollView>
        <View style = {styles.container}>
            <ToolBarItem style = {styles.Toolbar}>
                <TouchableOpacity style ={styles.btnBack} onPress={() => navigation.goBack()}>
                    {/* <FontAwesome name = "angle-left" size={30} color={Colors.blue}/> */}
                    <Image source = {require('../../images/back.jpg')}/> 
                </TouchableOpacity>
                <Text style = {styles.test}>THÔNG BÁO</Text>
                <TouchableOpacity style ={styles.btnMenu} onPress={() => navigation.goBack()}>
                    {/* <FontAwesome name = "fa-solid fa-bars-sort" size={30} color={Colors.blue}/> */}
                    <Image source = {require('../../images/menu.jpg')}/> 
                </TouchableOpacity>
            </ToolBarItem>
      
        <View>
            <Text style = {styles.textTieuDe}>Tiêu Đề</Text>
            <TextInput style = {styles.textIP}
            placeholder = 'Type here...'
            >
            </TextInput>
            <View>
            <Text style = {styles.textTieuDe}>Nhân Viên</Text>
            
            <TextInput style = {styles.textIP}
            placeholder = 'Type here...'
            >
            {/* <Image style = {styles.tick} source = {require('../images/tick.jpg')}/>  */}
            </TextInput>
            </View>
            <Text style = {styles.textTieuDe}>Mô tả</Text>
            <TextInput style = {styles.textMota}
            placeholder = 'Type here...'    
            >
            </TextInput>

            
        </View>
        
            <TouchableOpacity style = {styles.btnLuu}onPress={() => navigation.navigate('Notifi')}>
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
        ...FONTS.h5,
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
        ...FONTS.h5,
    },
    textIP: {
        borderRadius: 15,
        marginTop: 5,
        width: 382,
        alignSelf: 'center',
        backgroundColor: Colors.grey,

    },
    textMota: {
        borderRadius: 15,
        marginTop: 5,
        width: 382,
        alignSelf: 'center',
        backgroundColor: Colors.grey,
        height: 100,
        textAlignVertical: 'top'
         
    },
    dayStart: {
        marginTop: 10,
        marginLeft: 15,
        ...FONTS.h4
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
        ...FONTS.h7,
        alignSelf: 'center',
    },
})



export default Notification;