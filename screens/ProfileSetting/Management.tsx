import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
  SafeAreaView,
  SectionList,
  StatusBar
} from 'react-native';

import { Card } from 'react-native-paper';

import InputText from '../../components/UI/InputText';
import ToolBarProfile from '../../components/UI/ToolBarProfile';
import Colors from '../../constants/Colors';
import DATA from '../../data/seconListData';




const Separator = () => (
  <View style={styles.separator} />

);
const Management = ({ navigation }: { navigation: any }) => {

  const Item = ({ name, }:{name:any}) => (
    <View style={styles.item}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Image
      style={{width:76, height:76,borderRadius:10,}}
      source={require('../../images/nyc.jpg')} />
     <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title2}>Sáng</Text>
      </View>
      <Image
      style={{width:13, height:12,}}
      source={require('../../images/shapeGreen.png')} />
    
      </View>
     
    </View>
  );
  return (
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ToolBarProfile style={styles.Toolbar}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../images/back.jpg')} />
            </TouchableOpacity>

            <Text style={styles.textTile}>QUẢN LÍ CÔNG VIỆC</Text>

            <TouchableOpacity
              style={styles.btnMenu}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../images/menu.jpg')} />
            </TouchableOpacity>
          </ToolBarProfile>
        </View>

        <View>
          <InputText placeholder="Tìm kiếm" />
          <View style={{ paddingTop: 20, padding: 16, flexDirection: 'row' }}>
            <Card onPress={() => Alert.alert('')} style={styles.card}>
              <View>
                <Text style={styles.textHistory}>Lịch viếng thăm</Text>
              </View>
            </Card>

            <Card onPress={() => Alert.alert('kimlong')} style={styles.cardJob}>
              <Text style={styles.textJob}>Việc của tôi</Text>
            </Card>
          </View>
        </View>

        <SafeAreaView style={styles.container}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item name={item} sub={undefined} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,


  },
  Toolbar: {
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    backgroundColor: "#fff",
    color: '#B5B5B5',
    fontFamily: 'Montserrat Bold',
    padding: 12
  },
  item: {
    backgroundColor: "#EFEFEF",
    padding: 20,
    marginVertical: 8,
    borderRadius: 12,




  },
  title: {
    fontSize: 18,
    color: Colors.blue,
    marginRight: '15%',
    marginLeft: 15,
    fontWeight:'bold',
    marginTop: 15

  },
  title2: {
    fontSize: 16,
    color: '#636A6A',
    marginRight: '15%',
    marginLeft: 15,
    marginTop: 10
  },
  inputSearch: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    alignSelf: 'center',
    height: 50,
    width: 311,
    padding: 12,
  },

  btnBack: {
    height: 40,
    width: 30,
    marginRight: '1%',
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

  card: {
    backgroundColor: '#F2F2F2',
    width: 186,
    height: 48,
    borderRadius: 15,
  },
  cardJob: {
    backgroundColor: '#A3D6E9',
    width: 148,
    height: 48,
    borderRadius: 15,
    marginLeft: 20,
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
  separator: {
    marginVertical: 20,
    borderBottomColor: '#000',

  },
});

export default Management;
