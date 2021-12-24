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
  Alert,
} from 'react-native';
import ToolBar from '../../components/UI/ToolBar';
import FONTS from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import ToolBarItem from '../../components/UI/ToolBarItem';
import { Card } from 'react-native-paper';
import InputText from '../../components/UI/InputText';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const CreateTask = ( { navigation }: { navigation: any } ) => {
const textColor={textColor:Colors.white}
  return (
    <ScrollView>
      <View style={styles.container}>
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
        <View>
          <InputText placeholder="Tìm kiếm" />
          <View style={{ paddingTop: 20, padding: 16, flexDirection: 'row' }}>
            <Card onPress={() => Alert.alert('')} style={styles.card}>
              <View>
                <Text style={styles.textHistory}>Giao việc</Text>
              </View>
            </Card>

            <Card onPress={() => Alert.alert('kimlong')} style={styles.cardJob}>
              <Text style={styles.textJob}>Việc của tôi</Text>
            </Card>
          </View>
        </View>
        <View >
          <Text style={styles.textTieuDe}>Tiêu Đề</Text>
          <TextInput
            style={styles.textIP}
            placeholder="Type here..."></TextInput>
          <Text style={styles.textTieuDe}>Người Thực Hiện</Text>
          <TextInput style={styles.textIP}></TextInput>
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
          <View>
            <Text style={styles.dayStart}>Ngày bắt đầu - Ngày kết thúc</Text>
          </View>
          <View style={styles.viewCalendar}>
            <Calendar
              markingType={'period'}
              markedDates={{
                '2021-10-15': {marked: true, dotColor: Colors.blue},
                '2021-10-16': {marked: true, dotColor: Colors.red},
                '2021-08-18': {startingDay: true, color: Colors.blue},
                '2021-08-19': {color: Colors.primey},
                '2021-08-20': {endingDay: true, color: Colors.blue, },
                
              }}
              monthFormat="MMMM"
            />
            <View style={styles.viewTextStartEnd}>
              <Text style={styles.textStart}>Bắt Đầu</Text>
              <Text style={styles.textEnd}>Kết Thúc</Text>
            </View>
            <View style={styles.viewInputStartEnd}>
              <TextInput style={styles.inputStart} ></TextInput>
              <TextInput style={styles.inputEnd}></TextInput>
            </View>
          </View>

        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', padding: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeActivity')}
            style={styles.btnHuy}>
            <Text style={styles.textGiaoViec}>HỦY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailTask')}
            style={styles.btnLuu}>
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
    paddingLeft: 16,
    paddingRight: 16
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
    fontSize: 18,
    fontFamily: 'Montserrat Bold',
    marginLeft: '30%',
    color: '#636A6A',
  },
  btnMenu: {
    height: 40,
    width: 30,
    marginLeft: 100,
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
    color: Colors.white,
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
  card: {
    backgroundColor: '#F2F2F2',
    width: 186,
    height: 48,
    borderRadius: 15,
  },
  textHistory: {
    textAlign: 'center',
    padding: 12,
    fontFamily: 'Montserrat Bold',
    fontSize: 16,
    color: '#636A6A',
  },
  textJob: {
    textAlign: 'center',
    padding: 12,
    fontFamily: 'Montserrat Bold',
    fontSize: 16,
    color: '#fff',
  },
  cardJob: {
    backgroundColor: '#A3D6E9',
    width: 148,
    height: 48,
    borderRadius: 15,
    marginLeft: 20,
  },
  viewCalendar: {
    flex: 1,
    marginTop: 20,
    borderRadius: 12,
    padding: 15,

  },
  textStart: {
    flex: 1,
    alignItems: "flex-start",
    ...FONTS.h8,
    marginRight: 10
  },
  textEnd: {
    flex: 1,
    alignItems: "flex-start",
    ...FONTS.h8
  },
  viewTextStartEnd: {
    padding: 15,
    flexDirection: "row",
  },
  viewInputStartEnd: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15
  },
  inputStart: {
    flex: 1,
    height: 50,
    backgroundColor: Colors.grey,
    borderRadius: 15,
    ...FONTS.h9,
    textAlign: "center",
    marginRight: 10
  },
  inputEnd: {
    flex: 1,
    height: 50,
    backgroundColor: Colors.grey,
    borderRadius: 15,
    ...FONTS.h9,
    textAlign: "center",
  },
   HeadContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default CreateTask;
