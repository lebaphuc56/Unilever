import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
  Button,
} from 'react-native';

import {Card} from 'react-native-paper';



import InputText from '../../components/UI/InputText';
import ToolBarProfile from '../../components/UI/ToolBarProfile';
import Colors from '../../constants/Colors';

const ChangePassword = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ToolBarProfile style={styles.Toolbar}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../images/back.jpg')} />
            </TouchableOpacity>

            <Text style={styles.textTile}>ĐỔI MẬT KHẨU</Text>

            <TouchableOpacity
              style={styles.btnMenu}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../images/menu.jpg')} />
            </TouchableOpacity>
          </ToolBarProfile>
        </View>

        <Text style={styles.textComment}>Nhập Mật Khẩu Cũ</Text>
        <InputText placeholder="Nhập mật khẩu cũ" />

        <Text style={styles.textComment}>Nhập Lại Mật khẩu Cũ</Text>
        <InputText placeholder="Nhập lại mật khẩu cũ" />

        <Text style={styles.textComment}>Xác Nhận Mật Mhẩu Mới</Text>
        <InputText placeholder="Xác nhận mật khẩu mới" />

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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Toolbar: {
    alignItems: 'center',
  },

  btnBack: {
    height: 40,
    width: 30,
    marginRight: '5%',
  },

  textTile: {
    fontSize: 18,
    fontFamily: 'Montserrat Bold',
    marginLeft: '15%',
    color: '#636A6A',
  },
  btnMenu: {
    height: 40,
    width: 30,
    marginLeft: '15%',
    marginTop: 15,
  },

  cardFour: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  textFour: {
    fontSize: 16,
    fontWeight: '400',
  },
  viewFour: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
  },
  textComment: {
    padding: 14,
    fontSize: 20,
    fontWeight: '500',
  },
  fixToText: {
    paddingTop: 30,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  btnHuy: {
    backgroundColor: '#E4E4E4',
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
    fontFamily: 'Montserrat Bold',
    fontSize: 18,
  },
  textGiaoViec: {
    color:'#000',
    fontFamily: 'Montserrat Bold',
    fontSize: 18,
    opacity:0.4
  },
});

export default ChangePassword;
