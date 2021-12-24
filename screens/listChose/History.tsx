import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, TextInput, SectionList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Colors from '../constants/Colors';
const backgrou = require('../images/backgrounk.png')
const online = require('../images/online.png')
const DataHistory = [
  {
    title: "27/8/2019",
    data: [
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', image: backgrou, imageOnline: online },
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', image: backgrou, imageOnline: online },
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', image: backgrou, imageOnline: online },


    ],
  },
  {
    title: "28/8/2019",
    data: [
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', image: backgrou, imageOnline: online },
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', image: backgrou, imageOnline: online },
    ],
  },
  {
    title: "29/8/2019",
    data: [
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', image: backgrou, imageOnline: online },
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', image: backgrou, imageOnline: online },

    ],
  },

]


const DataMyWork = [
  {
    title: "27/8/2019",
    data: [
      { id_category: '#12455 Lorem Ipsum adkamdkakdka', image: backgrou, imageOnline: online },
      { id_category: '#12455 Lorem Ipsum', image: backgrou, imageOnline: online },
      { id_category: '#12455 Lorem Ipsum', image: backgrou, imageOnline: online },


    ],
  },
  {
    title: "28/8/2019",
    data: [

      { id_category: '#12455 Lorem Ipsum', image: backgrou, imageOnline: online },
      { id_category: '#12455 Lorem Ipsum', image: backgrou, imageOnline: online },


    ],
  },
  {
    title: "29/8/2019",
    data: [

      { id_category: '#12455 Lorem Ipsum', image: backgrou, imageOnline: online },
      { id_category: '#12455 Lorem Ipsum', image: backgrou, imageOnline: online },



    ],
  },



]



const History = ({ navigation }: { navigation: any }) => {
  const [Data, setData] = useState(DataHistory);

  const onHistory = () => {
    setData(DataHistory);
  }
  const onGiaoViec = () => {
    setData(DataHistory);
  }
  const onMyWork = () => {
    setData(DataMyWork);
  }

  const showList = () => {
    return (
      <View>
        <SectionList
          sections={Data}

          renderSectionHeader={({ section }) =>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
              <Text style={{ marginLeft: 16, fontSize: 17, fontWeight: '300' }}>{section.title} </Text>
              <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                <View style={{ borderBottomWidth: 0.3, borderColor: "#707070" }}>

                </View>
              </View>

            </View>
          }

          keyExtractor={(item, index) => index}

          renderItem={({ item }) => {
            return (
              <View style={{ borderColor: "#E4E4E4", flexDirection: 'row', marginTop: 20, borderWidth: 1, width: 400, height: 98, marginLeft: 16, borderRadius: 16, backgroundColor: '#E4E4E4', }}>
                <TouchableOpacity onPress={() => navigation.navigate('DetaiHistory', { item })}
                  style={{ flexDirection: 'row' }}>
                  <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 76, height: 76, marginLeft: 15 }} source={item.image} resizeMode="cover" />

                    <View style={{ marginRight: 100, marginLeft: 15, justifyContent: 'center', marginTop: 10 }}>

                      <Text style={{ color: '#0081C0', fontSize: 17, fontWeight: '700' }}>{item.id_category}</Text>

                      <Text style={{ color: '#636A6A', fontSize: 15 }} >{item.name}</Text>

                    </View>
                  </View>

                  <Image style={{ backgroundColor: '#6ACE6A', width: 13, height: 12, marginTop: 10, borderRadius: 16 }} source={item.imageOnline} />
                </TouchableOpacity>
              </View>


            )
          }
          }
        />
      </View>
    )
  }
  return (

    <SafeAreaView style={styles.Container}>
      <View style={styles.HeadContainer} >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image style={{ marginLeft: 16, width: 45, height: 45 }} source={require('../images/backHome.png')} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#636A6A' }}>LỊCH SỬ VIẾN THĂM</Text>
        </View>
        <TouchableOpacity >
          <Image style={{ marginRight: 16, }} source={require('../images/menu.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Tìm Kiếm'

          style={styles.TextSearch}
        />
        <Image style={styles.imageSearch} source={require('../images/backHome1.jpg')} />
      </View>
      <View style={styles.caegoryContainer}>
        <TouchableOpacity onPress={() => onHistory()}
          style={styles.cargoryButton}
        >

          <Text style={{ fontSize: 18 }}>Lịch sử</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => onGiaoViec()} style={styles.cargory2Button}>

          <Text style={{ fontSize: 18 }}>Giao việc</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => onMyWork()} style={styles.cargory3Button}>

          <Text style={{ fontSize: 18 }}>Việc của tôi</Text>

        </TouchableOpacity>

      </View>

      <View style={{ flex: 1 }}>{showList()}</View>

    </SafeAreaView>


  );


}


export default History;
const styles = StyleSheet.create({
  Container: {
    flex: 1,




  },
  HeadContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',


  },
  searchContainer: {
    flexDirection: 'row',

  },
  TextSearch: {
    borderColor: '#000',
    width: 330,
    height: 50,
    borderWidth: 0.6,
    marginLeft: 16,
    borderRadius: 16,
    paddingLeft: 30,
    backgroundColor: "#fff",

  },
  imageSearch: {
    marginLeft: 20,
    width: 55,
    height: 50,
    borderRadius: 16,
  },
  caegoryContainer: {


    flexDirection: 'row',
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,


  },
  cargoryButton: {
    width: 103,
    height: 48,
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 16,
    primary: '#fff',
    alignItems: 'center', justifyContent: 'center',

  },
  cargory2Button: {
    width: 117,
    height: 48,
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 16,
    primary: '#ffff',
    alignItems: 'center', justifyContent: 'center',
  },
  cargory3Button: {
    width: 146,
    height: 48,
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 16,
    primary: '#ffff',
    alignItems: 'center', justifyContent: 'center',
  }
})
