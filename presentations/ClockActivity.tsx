import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import ToolBarProfile from '../components/UI/ToolBarProfile';
import Colors from '../constants/Colors';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Visit Local Supermarket',
    subtitle: '12AM - 12/08/2019'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Visit Local Supermarket',
    subtitle: '12AM - 12/08/2019'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Visit Local Supermarket',
    subtitle: '12AM - 12/08/2019'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Visit Local Supermarket',
    subtitle: '12AM - 12/08/2019'
  },
];

const Item = ({ title ,subtitle}:{title:any,subtitle:any}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subtitle}</Text>
  </View>
);

const Reminder = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: { item: any }) => (
    <Item 
    title={item.title} 
    subtitle={item.subtitle} 
     />

  );

  return (
    <SafeAreaView style={styles.container}>

      <ToolBarProfile style={styles.Toolbar}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <Text style={styles.textTile}>REMINDER</Text>

          <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.goBack()}>

            <Image
              style={{ marginLeft: '100%' }}
              source={require('../images/menu.jpg')} />
          </TouchableOpacity>
        </View>

      </ToolBarProfile>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    backgroundColor: '#dddd',
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 12,
    borderRadius: 12,
    width: 380,
    height: 72,


  },
  title: {
    fontSize: 18,
    color: Colors.blue
  },
  subTitle:{
    fontSize: 16,
    color: Colors.black
  },

  Toolbar: {
    alignItems: 'center',
  },
  btnBack: {
    height: 40,
    width: 30,
    marginLeft: 20
  },
  textTile: {
    fontSize: 18,
    fontFamily: 'Montserrat Bold',
    marginLeft: '45%',
    color: '#636A6A',


  },
  btnMenu: {
    height: 40,
    width: 30,
    marginLeft: '10%',
    marginTop: 15
  },
});

export default Reminder;