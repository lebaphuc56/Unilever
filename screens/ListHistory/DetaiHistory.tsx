import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, TextInput, SectionList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
const backgrou = require('../../images/backgrounk.png')
const History = [
  {
    title: "Danh sách task",
    data: [
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', date: '27/08/2019', image: backgrou },
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', date: '27/08/2019', image: backgrou },
      { id_category: '#12455 Lorem Ipsum', name: 'Nguyen Van A', date: '27/08/2019', image: backgrou },


    ],
  },



]
const demo = ({ route, navigation }: { route: any, navigation: any }) => {
  const [Data, setData] = useState(null);
  useEffect(() => {
    const { item } = route.params;
    setData(item);

  });
  const [DataHistory, setDataHistory] = useState(History);
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.HeadContainer} >

          <TouchableOpacity
            onPress={() => navigation.navigate('Tab')}
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
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 382, height: 221, backgroundColor: '#F2F2F2', borderRadius: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0081C0', marginLeft: 21, marginTop: 24 }}>Visit Local Supermarket</Text>
            <View style={{ flexDirection: 'row', paddingVertical: 10, marginLeft: 21 }}>
              <Image style={{ borderRadius: 16, marginTop: 5, width: 13, height: 12 }} source={require('../../images/hanle.png')} />
              <Text style={{ fontSize: 15, fontWeight: 'SemiBold Italic', color: '#F29832', marginLeft: 14 }}>Đang xử lí</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: 'SemiBold', color: '#636A6A', marginLeft: 21, marginTop: 12 }}>Mô Tả</Text>
            <Text style={{ fontSize: 17, fontWeight: 'Regular', color: '#636A6A', marginLeft: 21, marginTop: 5 }}>Waves flung themselves at the blue evening. Low light burned on the wet hulks of ships that slipper by mossy pilings into the docks</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#ffff', marginTop: 22, marginLeft: 16 }}>
          <View style={{}}>
            <Image style={{ width: 284, height: 113 }} source={require('../../images/HotelImage.png')} />

          </View>


        </View>
        <View style={{ flex: 1, marginTop: 20 }}>

          <SectionList
            sections={DataHistory}
            renderSectionHeader={({ section }) =>
              <Text style={{ marginLeft: 16, fontSize: 18, fontWeight: 'Bold' }}>{section.title} </Text>

            }
            keyExtractor={(item, index) => index}

            renderItem={({ item }) => {
              return (
                <View style={{ borderColor: "#E4E4E4", flexDirection: 'row', marginTop: 20, borderWidth: 1, width: 400, height: 98, marginLeft: 16, borderRadius: 16, backgroundColor: '#E4E4E4', }}>
                  <TouchableOpacity onPress={() => navigation.navigate('ListNoteDetaiHistory', { item })}
                    style={{ flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                      <Image style={{ width: 76, height: 76, marginLeft: 15 }} source={item.image} resizeMode="cover" />

                      <View style={{ marginRight: 100, marginLeft: 15, justifyContent: 'center' }}>

                        <Text style={{ color: '#0081C0', fontSize: 17, fontWeight: '700' }}>{item.id_category}</Text>

                        <Text style={{ color: '#636A6A', fontSize: 15, fontWeight: 'Bold' }} >{item.name}</Text>
                        <Text style={{ color: '#636A6A', fontSize: 15 }} >{item.date}</Text>

                      </View>
                    </View>

                    <Image style={{ backgroundColor: '#6ACE6A', width: 13, height: 12, marginTop: 10, borderRadius: 16 }} source={item.backgrou} />
                  </TouchableOpacity>
                </View>


              )
            }
            }
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default demo

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  HeadContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',


  },
})
