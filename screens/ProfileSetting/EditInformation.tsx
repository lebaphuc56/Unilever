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

const EditInformation = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <ToolBarProfile style={styles.Toolbar}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../images/back.jpg')} />
            </TouchableOpacity>

            <Text style={styles.textTile}>CHỈNH SỮA THÔNG TIN</Text>

            <TouchableOpacity
              style={styles.btnMenu}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../images/menu.jpg')} />
            </TouchableOpacity>
          </ToolBarProfile>
        </View>

        <View style={{alignItems: 'center'}}>
          <Card style={styles.card}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                style={{width: 88, height: 88}}
                source={require('../../images/girl2.png')}
              />
              <View style={{alignContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: Colors.blue,
                    fontWeight: 'bold',
                  }}>
                  Thay đổi ảnh
                </Text>
              </View>
            </View>
          </Card>
        </View>

        <View style={{paddingTop: 40, padding: 12}}>
          <Text style={styles.textComment}>Họ Tên</Text>
          <InputText
            placeholder="Nhập tên"
            onChangeText={'email'}
            error={undefined}
          />

          <Text style={styles.textComment}>Số điện thoại</Text>
          <InputText
            placeholder="Nhâp số điện thoại"
            onChangeText={'email'}
            error={undefined}
          />

          <Text style={styles.textComment}>Địa chỉ</Text>
          <InputText
            placeholder="Nhập địa chỉ"
            onChangeText={'email'}
            error={undefined}
          />

          <Text style={styles.textComment}>Email</Text>
          <InputText
            placeholder="Nhập @Email"
            onChangeText={'email'}
            error={undefined}
          />
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', padding: 12, }}>
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
    marginRight: 45,
    justifyContent: 'flex-end',
  },

  textTile: {
    fontSize: 18,
    fontFamily: 'Montserrat Bold',
    color: '#636A6A',
    textAlign: 'center',
  },
  btnMenu: {
    height: 40,
    width: 30,
    marginLeft: 45,
    marginTop: 15,
  },

  card: {
    padding: 12,
    width: 337,
    height: 68,
    opacity: 0.8,
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
    padding: 8,
    fontSize: 18,
    fontFamily: 'Montserrat SemiBold',
    color: '#636A6A',
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

export default EditInformation;
