import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,FlatList,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; 

import SurveyPageItem from '../components/SurveyPageItem';

import {SurveyPage, SurveyPages} from '../data/SurveyPage'
import { ScrollView } from 'react-native-gesture-handler';

const SurverPageActivity = ({navigation}: {navigation: any}) => {
  const [radioButtons, setRadioButtons] = useState<SurveyPage[]>(SurveyPages)
  function onPressRadioButton(radioButtonsArray: SurveyPage[]) {
    setRadioButtons(radioButtonsArray);
}

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.viewImg}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={styles.viewBack}>
              <FontAwesome name="angle-left" size={32} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.viewTitleMain}>
          <Text style={styles.titles}>KHẢO SÁT</Text>
        </View>
        <View style={styles.viewIconMenu}>
        <Image source={require('../images/menu.jpg')} />
        </View>
      </View>
      <ScrollView>
      <View style={styles.viewTextMain}>
      <View style={styles.viewText}>
            <Text style={styles.text}>18/09/2001</Text>
            <Text style={styles.texts}>Lorem ipsum</Text>
          </View>
          <View style={styles.viewPage}>
            <Text style={styles.titlePage}>Page 1/2</Text>
          </View>       
      </View>
      <View style={styles.viewList}>
      <FlatList
          data={SurveyPages}
          renderItem={({ item }) => (
            <SurveyPageItem
            question={item.question}
            textA={item.aswer1}
            textB={item.aswer2}
            textC={item.aswer3}
            textD={item.aswer4}
            
            />)} />
      </View>
      <View style={styles.viewBtn}>
          <View style={styles.btnCancel}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textCancel}>Hủy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnSave}>
            <TouchableOpacity onPress={()=> navigation.navigate("SurverPage2")}>
              <Text style={styles.textSave}>Tiếp Theo</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    </View>
  );
};

export default SurverPageActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Colors.white,
  },
  menu: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'center',
  },
  viewBack: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: Colors.primey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titles: {
    ...Fonts.h5,
  },
  viewImg: {
    flex: 1,
    alignItems: 'flex-start',
  },
  viewTitleMain: {
    alignItems: 'center',
  },
  viewIconMenu: {
    flex: 1,
    alignItems: 'flex-end',
  },
  viewTextMain:{
      marginTop:30,
      flexDirection: "row"
  },
  viewText: {
    flex: 1
  },
  text:{
      ...Fonts.h11
  },
  texts:{
      ...Fonts.h3
  },
  viewList:{
      flex:1,
      marginTop:30
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
    ...Fonts.h7
  },
  textCancel: {
    ...Fonts.h8
  },
  viewPage: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  titlePage: {
    ...Fonts.h9
  }
});
