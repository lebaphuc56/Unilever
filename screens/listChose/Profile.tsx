import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import ToolBarProfile from '../../components/UI/ToolBarProfile';

import { Card, Drawer } from 'react-native-paper';
import Colors from '../../constants/Colors';
import { Comment } from '../../data/Comment';
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';
import ToolBar from '../../components/UI/ToolBar';
import { Icon } from 'react-native-vector-icons/Icon';

const Profile = ({ navigation }: { navigation: any }) => {

  const Separator = () => (
    <View style={styles.separator} />

  );

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
      <TouchableOpacity
        onPress={() => drawer.current.closeDrawer()}
      >
        <Image style={{ width: 25, height: 25, marginTop: 40, marginLeft: '85%' }}
          source={require('../../images/x.png')} />
      </TouchableOpacity>


      <ToolBar>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
        >
          <View style={styles.viewToolbar}>
            <Image style={{ width: 50, height: 50, marginTop: 20 }}
              source={require('../../images/programmer.png')} />

            <View style={{ padding: 10 }} >
              <Text style={styles.textToolbar}>Nhân Viên </Text>
              <Text style={{ fontWeight: 'bold', color: Colors.white, fontSize: 20 }}>Nguyễn Văn A</Text>
              <Text style={styles.textToolbar}>Ngày gia nhập: 28/9/2021</Text>
            </View>


          </View>
        </TouchableOpacity>
      </ToolBar>
      <Separator />

      <View style={{alignItems:'center',flexDirection:'row', marginLeft: 30, marginTop: 20}}>
        <Image style={{ width: 35, height: 35, }}
          source={require('../../images/calendar.png')} />
        <Text style={{fontSize:18,fontFamily:'Montserrat Medium', color:'#fff',textAlign:'center',padding:8,marginLeft:'20%'}}>Đặt Lịch</Text>

      </View>

      <View style={{alignItems:'center',flexDirection:'row', marginLeft: 30, marginTop: 20}}>
        <Image style={{ width: 35, height: 35, }}
          source={require('../../images/clipboard.png')} />
        <Text style={{fontSize:18,fontFamily:'Montserrat Medium', color:'#fff',textAlign:'center',padding:8,marginLeft:'20%'}}>Tạo Task</Text>

      </View>

      <View style={{alignItems:'center',flexDirection:'row', marginLeft: 30, marginTop: 20}}>
        <Image style={{ width: 35, height: 35, }}
          source={require('../../images/history.png')} />
        <Text style={{fontSize:18,fontFamily:'Montserrat Medium', color:'#fff',textAlign:'center',padding:8,marginLeft:'20%'}}>Lịch Sử</Text>

      </View>
      <View style={{alignItems:'center',flexDirection:'row', marginLeft: 30, marginTop: 20}}>
        <Image style={{ width: 35, height: 35, }}
          source={require('../../images/bell.png')} />
        <Text style={{fontSize:18,fontFamily:'Montserrat Medium', color:'#fff',textAlign:'center',padding:8,marginLeft:'20%'}}>Thông Báo</Text>

      </View>
    </View>
  )

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <ScrollView>
          <ToolBarProfile style={styles.Toolbar}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../images/back.jpg')} />
            </TouchableOpacity>

            <Text style={styles.textTile}>THÔNG TIN CÁ NHÂN</Text>

            <TouchableOpacity
              style={styles.btnMenu}
              onPress={() => drawer.current.openDrawer()}>
              <Image source={require('../../images/menu.jpg')} />
            </TouchableOpacity>
          </ToolBarProfile>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Card style={styles.cardProfile}>
              <View style={{ padding: 20, flexDirection: 'row' }}>
                <Image source={require('../../images/girl.png')} />

                <View style={{ marginTop: 10, marginLeft: 20 }}>
                  <Text
                    style={{ fontWeight: '600', color: Colors.blue, fontSize: 22 }}>
                    Nguyễn Văn A
                  </Text>
                  <Text style={styles.textProfile}>
                    Chức vụ: {<Text style={{ color: '#707070' }}>Nhân viên</Text>}
                  </Text>

                  <Text style={styles.textProfile}>
                    Ngày gia nhập:{' '}
                    {<Text style={{ color: '#707070' }}>28/9/2021</Text>}{' '}
                  </Text>
                </View>
              </View>
            </Card>
          </View>

          <View style={styles.cardFour}>
            <Card style={styles.cardForgotPass}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChangePassword')}>
                <View style={styles.viewFour}>
                  <Text style={styles.textFour}>Đổi mật khẩu</Text>
                  <Image source={require('../../images/shape.jpg')} />
                </View>
              </TouchableOpacity>
            </Card>
          </View>
          <View style={styles.cardFour}>
            <Card style={styles.cardForgotPass}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditInformation')}>
                <View style={styles.viewFour}>
                  <Text style={styles.textFour}>Chỉnh sữa thông tin</Text>
                  <Image source={require('../../images/shape.jpg')} />
                </View>
              </TouchableOpacity>
            </Card>
          </View>
          <View style={styles.cardFour}>
            <Card style={styles.cardForgotPass}>
              <TouchableOpacity onPress={() => navigation.navigate('Management')}>
                <View style={styles.viewFour}>
                  <Text style={styles.textFour}>Quản lí công việc</Text>
                  <Image source={require('../../images/shape.jpg')} />
                </View>
              </TouchableOpacity>
            </Card>
          </View>
          <View style={styles.cardFour}>
            <Card style={styles.cardForgotPass}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CourseInformation')}>
                <View style={styles.viewFour}>
                  <Text style={styles.textFour}>Thông tin khóa học</Text>
                  <Image source={require('../../images/shape.jpg')} />
                </View>
              </TouchableOpacity>
            </Card>
          </View>

          <Text style={styles.textComment}>Bình luận gần đây</Text>

          <Card style={styles.cardComment}>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                  <Image source={require('../../images/shapeT.png')} />
                </View>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                  <Text style={styles.textCom1}>Supervisor 1</Text>
                </View>
              </View>
              <View>
                <Text style={styles.textCom2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </Text>
              </View>
            </View>
          </Card>

          <Card style={styles.cardComment}>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                  <Image source={require('../../images/shapeT.png')} />
                </View>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                  <Text style={styles.textCom1}>Supervisor 1</Text>
                </View>
              </View>
              <View>
                <Text style={styles.textCom2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </Text>
              </View>
            </View>
          </Card>
          <Card style={styles.cardComment}>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                  <Image source={require('../../images/shapeT.png')} />
                </View>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                  <Text style={styles.textCom1}>Supervisor 1</Text>
                </View>
              </View>
              <View>
                <Text style={styles.textCom2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </Text>
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
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
  textProfile: {
    color: Colors.blue,
    fontSize: 16,
  },
  btnBack: {
    height: 40,
    width: 30,
    marginLeft: 20,
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
    marginLeft: '10%',
    marginTop: 15,
  },
  cardProfile: {
    width: '90%',
    height: 130,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 2,
    shadowOpacity: 1,
  },
  cardForgotPass: {
    width: '90%',
    height: 60,

    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
  },
  cardFour: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  cardComment: {
    width: 400,
    height: 120,
    borderWidth: 1,
  },
  textFour: {
    fontSize: 15,
    fontFamily: 'Montserrat SemiBold',
  },
  viewFour: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
  },
  textComment: {
    padding: 18,
    fontSize: 18,
    fontFamily: 'Montserrat SemiBold',
    opacity: 0.6,
  },
  textCom1: {
    fontSize: 18,
    fontFamily: 'Montserrat ',
    color: Colors.blue,
    marginBottom: 10,
  },
  textCom2: {
    marginLeft: 80,
    fontSize: 15,
  },
  navigationContainer: {
    backgroundColor: Colors.blue
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textToolbar: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '600',
    opacity: 0.9

  },
  viewToolbar: {
    padding: 12,
    flexDirection: 'row'


  },

});

export default Profile;
