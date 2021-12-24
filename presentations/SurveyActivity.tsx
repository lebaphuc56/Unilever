import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from 'react-native-gesture-handler';

import SurveyItem from '../components/SurveyItem';
import { Survey, Surveys } from '../data/Survey';
import { NavigationContainer } from '@react-navigation/native';



const SurveyActivity = (props:any) => {
  const navigation = NavigationContainer
  const selectItemHandler = (id: any, date: any) => {
    props.navigation.navigate('SurverPage1', {
      productId: id,
      productDate: date
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.viewTitleMain}>
          <Text style={styles.titles}>KHẢO SÁT</Text>
        </View>
        <View style={styles.viewIconMenu}>
        <Image source={require('../images/menu.jpg')} />
        </View>
      </View>
      <View style={styles.viewList}>
        <FlatList
          nestedScrollEnabled
          data={Surveys}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SurveyItem
              date={item.date}
              onSelect={() =>{
                selectItemHandler(item.id, item.date);
              }}
            />)} />
      </View>
    </View>
  )
}
export default SurveyActivity;
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
  titles: {
    ...Fonts.h5
  },
  viewImg: {
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
  viewList: {
    flex: 1
  }
})