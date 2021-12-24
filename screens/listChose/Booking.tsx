import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown';

import { Distributor, Distributors } from '../../data/ListDistributor'
import { FlatList } from 'react-native-gesture-handler';
import DistributorItem from '../../components/DistributorItem';
import ToolBarProfile from '../../components/UI/ToolBarProfile';

import InputText from '../../components/UI/InputText'

LocaleConfig.locales['fr'] = {
  monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const isValidInput = (text: string) => {
  const input = /^[a-zA-Z ]*$/
  return input.test(text)
}
const updateError = (error: any, stateUpdate: (arg0: any) => void) => {
  stateUpdate(error);
  setTimeout(() => {
    stateUpdate('');
  }, 2500);
};
const Booking = ({ navigation }: { navigation: any }) => {
  const vacation = { key: 'vacation', color: Colors.red, };
  const massage = { key: 'massage', color: Colors.green };
  const workout = { key: 'workout', color: Colors.blue };

  const [input, setInput] = useState({
    input_dis: ''
  })
  const [errorInput, setErrorInput] = useState('');
  const { input_dis } = input;
  const isValidFormInput = () => {
    if (!isValidInput(input_dis) || input_dis.length < 1)
      return updateError('Vui lòng chọn nhà phân phối ', setErrorInput);
    return true;
  };

  const save = () => {
    if (isValidFormInput()) {
      setShowSuccess(true)
    } else {
      setShowFail(true)
    }
  }
  const status = ['Cả ngày', '1 Tiếng', '2 Tiếng', '4 Tiếng'];

  const [search, setSearch] = useState<string>("")
  const [distributor, setDistributor] = useState<Distributor[] | null>(null);
  const [listShow, setListShow] = useState<boolean>(false);

  useEffect(() => {
    (() => {
      setDistributor(Distributors)
    })();
  }, [])

  const handleSearch = (text: string, fieldText: string) => {
    const distributor: Distributor[] = Distributors.filter(d => d.name.includes(text)
    );
    setDistributor(distributor)
    setInput({ ...input, [fieldText]: text });
  }

  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);

  const [selected, setSelected] = useState()

  return (
    <View style={styles.container} >
       <View style={styles.HeadContainer} >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image style={{ marginLeft: 16, width: 45, height: 45 }} source={require('../../images/backHome.png')} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#636A6A' }}>ĐẶT LỊCH</Text>
        </View>
        <TouchableOpacity >
          <Image style={{ marginRight: 16, }} source={require('../../images/menu.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.viewCalendar}>
          <Calendar
            theme={{
              todayBackgroundColor:Colors.blue,
              todayTextColor:Colors.white,
            }}
            markingType={'multi-dot'}
            markedDates={{
              '2021-10-05': { dots: [vacation, workout] },
              '2021-10-06': { dots: [massage] },
              '2021-10-15': { dots: [workout] },
              '2021-10-19': { dots: [vacation] },
            }}
            monthFormat="MMMM"
          />
        </View>
        <View style={styles.viewTitles}>
          <Text style={styles.title}>Thời Gian</Text>
          <View style={styles.viewDrops}>
            <View style={styles.viewDrop}>
              <SelectDropdown
                buttonStyle={styles.drop}
                rowStyle={styles.row}
                buttonTextStyle={styles.rowText}
                rowTextStyle={styles.rowText}
                data={status}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
            <View style={styles.viewIconDrop}>
              <FontAwesome name="angle-down" size={24} color={Colors.grey} />
            </View>
          </View>
          <Text style={styles.title}>Nhà Phân Phối</Text>
          <View style={styles.Distributor} >
            <View style={styles.viewInputDistributor} onTouchStart={() => setListShow(true)} >
              <InputText
                error={errorInput}
                style={styles.inputDistributor}
                placeholder='abc'
                onChangeText={(text: string) => handleSearch(text, 'input_dis')}
              />
            </View>
            <View style={styles.viewIconDrop}>
              <FontAwesome name="angle-down" size={24} color={Colors.grey} />
            </View>
          </View>
          {errorInput ? <Text style={styles.error}>{errorInput}</Text> : null}
          <View style={{ display: listShow == true ? "flex" : "none", height: '20%' }} >
            <FlatList
              nestedScrollEnabled
              data={distributor}
              renderItem={({ item }) => (
                <DistributorItem
                  name={item.name}
                />
              )
              } />
          </View>
          <Text style={styles.title}>Mục Đích Viếng Thăm</Text>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              placeholder='Type here...'
            />
          </View>
          <Text style={styles.title}>Khách Mời</Text>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              placeholder='Type here...'
            />
          </View>
        </View>
        <View style={styles.viewBtn}>
          <View style={styles.btnCancel}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textCancel}>HỦY</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnSave}>
            <TouchableOpacity onPress={save}>
              <Text style={styles.textSave}>CHẤP NHẬN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        visible={showSuccess}
        transparent
        onRequestClose={() => { setShowSuccess(false) }}>
        <View style={styles.viewModal}>
          <View style={styles.alert}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.titleSuccess}>Đặt lịch thành công!</Text>
            </View>
            <TouchableOpacity onPress={() => setShowSuccess(false)}>
              <View style={{ justifyContent: "flex-end", right: 20 }}>
                <FontAwesome name="times" size={15} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
      <Modal
        visible={showFail}
        transparent
        onRequestClose={() => { setShowFail(false) }}>
        <View style={styles.viewModal}>
          <View style={styles.alert}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.titleFail}>Đặt lịch không thành công!</Text>
            </View>
            <TouchableOpacity onPress={() => setShowFail(false)}>
              <View style={{ justifyContent: "flex-end", right: 20 }}>
                <FontAwesome name="times" size={15} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Colors.white
  },
  menu: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 10,
    alignItems: "center"
  },
  viewBack: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: Colors.primey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    position: "absolute"
  }, titles: {
    ...Fonts.h5
  },
  imageBack: {
    flex: 2
  }, viewImg: {
    flex: 1,
    alignItems: "flex-start",
  },
  viewTitleMain: {
    alignItems: "center"
  },
  viewIconMenu: {
    flex: 1,
    alignItems: "flex-end",
  },
  viewCalendar: {
    marginTop: 20
  },
  viewTitles: {
    flex: 1
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: "Montserrat Bold",
    color: "#636A6A"
  },
  drop: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    borderRadius: 12,
    height: 50,
  },
  row: {
    backgroundColor: '#F2F2F2',
  },
  rowText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: "Mulish",
    fontStyle: "normal",
    color: "#091F3A",
    lineHeight: 20
  },
  viewDrops: {
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 16
  },
  viewDrop: {
    width: "100%",
    marginTop: 10,
    position: "absolute"
  },
  viewInput: {
    marginTop: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
  },
  Distributor: {
    justifyContent: "center",
    marginTop: 20,
  },
  viewInputDistributor: {
    position: "absolute",
    marginTop: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    height: 50,
    width: "100%"
  },
  input: {
    paddingLeft: 15,
    ...Fonts.h10,
  },
  inputDistributor: {
    paddingLeft: 15,
    ...Fonts.h10,
  },
  viewIconDrop: {
    alignItems: "flex-end",
    marginRight: 15
  },
  viewBtn: {
    flexDirection: "row",
    marginTop: 20
  },
  btnCancel: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  btnSave: {
    flex: 1,
    borderRadius: 25,
    height: 50,
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginBottom: 20
  },
  textSave: {
    fontSize: 15,
    fontFamily: "Montserrat Bold",
    color: "#FFFFFF"
  },
  textCancel: {
    fontSize: 15,
    fontFamily: "Montserrat Bold",
    color: "#636A6A"
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

  },

  textTile: {
    fontSize: 18,
    fontFamily: 'Montserrat Bold',
    color: '#636A6A',
    padding: 12,
    marginLeft: 40
  },
  btnMenu: {
    height: 40,
    width: 30,
  },
  bg: {
    backgroundColor: Colors.orange
  },
  error: {
    ...Fonts.h13,
    marginTop: 15,
    textAlign: "right"
  },
  viewModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  alert: {
    flexDirection: "row",
    height: 58,
    width: "85%",
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  titleSuccess: {
    ...Fonts.h15
  },
  titleFail: {
    ...Fonts.h14
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

export default Booking;