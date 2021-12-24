
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const category = ({navigation}:{navigation:any}) => {
  return (
    <View>
      <View style={styles.HeadContainer} >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image style={{ marginLeft: 16, width: 45, height: 45 }} source={require('../images/backHome.png')} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text style={{ fontSize: 18, fontFamily:'Montserrat Bold', color: '#636A6A' }}>VIDEOS</Text>
        </View>
        <TouchableOpacity >
          <Image style={{ marginRight: 16, }} source={require('../images/menu.png')} />
        </TouchableOpacity>
      </View>
     
    </View>
  )
}
export default category;
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

})
