import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import ToolBar from '../../components/UI/ToolBar';
import FONTS from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import ToolBarItem from '../../components/UI/ToolBarItem';

const Mywork_Stack = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ToolBarItem style={styles.Toolbar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeActivity')}
            style={styles.btnBack}>
            {/* <FontAwesome name = "angle-left" size={30} color={Colors.blue}/> */}
            <Image source={require('../../images/back.jpg')} />
          </TouchableOpacity>
          <Text style={styles.test}>TẠO TASK</Text>
          <TouchableOpacity
            style={styles.btnMenu}
            onPress={() => navigation.goBack()}>
            {/* <FontAwesome name = "fa-solid fa-bars-sort" size={30} color={Colors.blue}/> */}
            <Image source={require('../../images/menu.jpg')} />
          </TouchableOpacity>
        </ToolBarItem>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateTask')}
            style={styles.btnGiaoViec}>
            <Text style={styles.textGiaoViec}>Giao Việc</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Stack2')}
            style={styles.btnGiaoViec}>
            <Text style={styles.textGiaoViec}>Việc của tôi</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textTieuDe}>Tiêu Đề</Text>
          <TextInput
            style={styles.textIP}
            placeholder="Type here..."></TextInput>

          <Text style={styles.textTieuDe}>Mô tả</Text>
          <TextInput
            style={styles.textMota}
            placeholder="Type here..."></TextInput>
          <View>
            <Text style={styles.textTieuDe}>Chọn lịch viếng thăm</Text>

            <TextInput style={styles.textIP} placeholder="Type here...">
              {/* <Image style = {styles.tick} source = {require('../images/tick.jpg')}/>  */}
            </TextInput>
          </View>
          <Text style={styles.textTieuDe}>Thời gian</Text>
          <TextInput style={styles.textIP}></TextInput>
          <View>
            <Text style={styles.dayStart}>Ngày bắt đầu - Ngày kết thúc</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeActivity')}
            style={styles.btnHuy}>
            <Text style={styles.textGiaoViec}>HỦY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLuu}>
            <Text style={styles.textluu}>LƯU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Toolbar: {
    alignItems: 'center',
  },
  btnBack: {
    height: 40,
    width: 30,
    marginLeft: 20,
  },
  tick: {},
  test: {
    marginLeft: 110,
    ...FONTS.h4,
  },
  btnMenu: {
    height: 40,
    width: 30,
    marginLeft: 125,
    marginTop: 15,
  },
  btnGiaoViec: {
    backgroundColor: Colors.grey,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    marginLeft: 20,
  },
  textGiaoViec: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textTieuDe: {
    marginLeft: 10,
    marginTop: 20,
    ...FONTS.h5,
  },
  textIP: {
    borderRadius: 15,
    marginTop: 5,
    width: 400,
    alignSelf: 'center',
    backgroundColor: Colors.grey,
  },
  textMota: {
    borderRadius: 15,
    marginTop: 5,
    width: 400,
    alignSelf: 'center',
    backgroundColor: Colors.grey,
    height: 100,
    textAlignVertical: 'top',
  },
  dayStart: {
    marginTop: 10,
    marginLeft: 15,
    ...FONTS.h4,
  },
  btnHuy: {
    backgroundColor: Colors.grey,
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 185,
  },
  btnLuu: {
    backgroundColor: Colors.blue,
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 185,
    marginLeft: 20,
  },
  textluu: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Mywork_Stack;
