import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Image, StyleSheet, ScrollView,FlatList} from 'react-native';
import ToolBarProfile from '../components/UI/ToolBarProfile';
import Colors from '../constants/Colors';
const news2 = require('../images/new2.png');
const news3 = require('../images/new3.png');
const News = [
  { id: 1, image: news2, name: 'Bản tin buổi chiều', note: 'Lorem ipsum dolor sit amet , consetetur sadipscing elitr,sed diam nonumy eirmod ',date:'3:38OPM - 17/09/2019' },
  { id: 2, image: news3, name: 'Bản tin buổi tối', note: 'Lorem ipsum dolor sit amet , consetetur sadipscing elitr,sed diam nonumy eirmod ',date:'3:38OPM - 17/09/2019' },
]
const DetaiNewsHome =({route, navigation}:{route:any, navigation:any})=>{
  const [listNews, setlistNews] = useState(News)
    return(
        
            <View style={styles.container}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                >
    
          <ToolBarProfile style={styles.Toolbar}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.goBack()}>
              <Image  source={require('../images/back.jpg')} />
            </TouchableOpacity>

            <Text style={styles.textTile}>BẢN TIN BUỔI SÁNG</Text>

            <TouchableOpacity
              style={styles.btnMenu}
            //   onPress={() => drawer.current.openDrawer()}
              >
              <Image source={require('../images/menu.jpg')} />
            </TouchableOpacity>
          </ToolBarProfile>
          <View style={styles.backgrouNews}>
              <Image style={styles.ImagebackgrouNews} source={require('../images/backgroNews.png')} />
          </View>
          <Text 
          style={{fontSize:20,
                  color:'#0081C0',
                  marginTop:20,
                  marginLeft:16,
                  fontWeight:'bold',
                  fontFamily: 'Montserrat',
          }}>CHAPTER I</Text>
          <View style={styles.containerNews}>
              <Text style={styles.textNews}>
              Waves flung themselves at the blue evening. Low light 
              burned on the wet hulks of ships that slipped by mossy 
              pilings into the docks.
              </Text>

          </View>
          <View style={styles.containerNews}>
              <Text style={styles.textNews}>
              As she slid off the rock and started walking beside him, 
             barefooted in the sand, she asked, "That boy—I wasn't 
              sure, he was all tied up, but he had four arms, didn't 
               he?"
              </Text>

          </View>
          <View style={styles.backgrouNews}>
              <Image style={styles.ImagebackgrouNews} source={require('../images/backgrouNews2.png')}/>
          </View>
          <Text style={{fontSize:15,marginLeft:16,marginTop:20}} >"He did."</Text>
          <View style={styles.containerNews1}>
          <Text style={styles.textNews}>
          
"You know, I can't just go around saying it was awful. I 
think I'm going to write a poem. Or make something. 
Or both. I've got to get it out of my head."
              </Text>
              </View>
              <View style={styles.containerNews}>
              <Text style={styles.textNews}>
              "That wouldn't be a bad idea," he mumbled as they 
approached the trees in front of the river. "Not at all."
And several days later, and several hundred miles 
away ...
              </Text>
              </View>
              <Text style={{fontSize:18,
                fontWeight:'bold',
                borderTopWidth:0.3,
                marginTop:15,
                marginLeft:16,
                }}>Tin tức liên quan</Text>
              <View>
              <FlatList
                        data={listNews}

                        keyExtractor={item => item.id.toString()}
                        renderItem={({item})=>{
                          return(
                            <TouchableOpacity style={{
                              width: 400, height: 111, 
                          }}>
                              <View style={{ flexDirection: 'row',marginTop:17 }}>
                                  <Image
                                      style={{ height: 88, width: 89, marginLeft: 16,borderRadius:16 }}
                                      source={item.image}
                                      resizeMode="cover"
                                  />
              
              
              
                                  <View style={{ flex: 1, marginLeft: 20 }}>
              
                                      <Text
                                          style={{
                                              fontSize: 15, fontWeight: '700',color:'#0081C0',marginTop:3
                                          }}>
              
                                          {item.name}
                                      </Text>
                                      <Text
                                          style={{
                                              fontSize: 13
                                          }}>
                                          {item.date}
                                      </Text>
                                      <Text
                                          style={{
                                              fontSize: 13, marginTop: 2
                                          }}>
                                          {item.note}
                                      </Text>
                                  </View>
              
                              </View>
                          </TouchableOpacity>
              
                          )
                        }}

                    />
              </View>
    
          </ScrollView>
        </View>
    
    )
}
export default DetaiNewsHome
const styles=StyleSheet.create({
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
    height: 45,
    width: 45,
    marginLeft: 16,

  },
  textTile: {
    fontSize: 18,
    fontFamily: 'Montserrat Bold',
    marginLeft: '15%',
    color: '#636A6A',
    fontWeight:'Bold'
  },
  btnMenu: {
    height: 40,
    width: 30,
    marginLeft: '10%',
    marginTop: 16,
  },
  backgrouNews:{
      marginTop:10,
    marginLeft:16,
  },
  ImagebackgrouNews:{
      width:390,
      height:220,
     
  },
  containerNews:{
      width:405,
      height:59,
      marginTop:13,
      
      marginLeft:16,
  },
  textNews:{
      fontSize:15,
      fontFamily:'Muli'

      
      

  },
  containerNews1:{
    width:405,
    height:59,
    
    
    marginLeft:16,
  }
})