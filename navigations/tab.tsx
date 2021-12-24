import 'react-native-gesture-handler';
import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from '../constants/Icons'
import Colors from '../constants/Colors'

import HomeActivity from '../presentations/HomeActivity';
import CartActivity from '../presentations/CartActivity';
import ClockActivity from '../presentations/ClockActivity';
import SurveyActivity from '../presentations/SurveyActivity'

import * as Animatable from 'react-native-animatable'


const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home-heart', component: HomeActivity, color: Colors.primey, },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'file-document', component: SurveyActivity, color: Colors.green, },
  { route: 'Add', label: 'Add New', type: Icons.Feather, icon: 'clock', component: ClockActivity, color: Colors.red, },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'cart', component: CartActivity, color: Colors.black, },
];
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewref = useRef(null)
  const textviewref = useRef(null)
  useEffect(() => {

    if (focused) {
      viewref.current.animate({ 0: { scale: 0 }, 1: { scale: 1 }, 2: { scale: 1 } });
      textviewref.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });


    } else {
      viewref.current.animate({ 0: { scale: 1 }, 1: { scale: 1 } });
      textviewref.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });


    }


  }, [focused])
  return (

    <TouchableOpacity style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
      onPress={onPress} >
      <Animatable.View
        ref={viewref}

        style={{
          flexDirection: 'row',
          backgroundColor: focused ? Colors.white : Colors.blue,
          width: 100,
          height: 40,
          alignItems: 'center',
          borderRadius: 16,
          padding: 8
        }}>
        <MaterialCommunityIcons name={item.icon} size={24} color={focused ? Colors.blue : Colors.white} />
        <Animatable.View
          ref={textviewref}>
          <Text
            style={{
              fontSize: 15,
              color: focused ? Colors.blue : Colors.blue,
              paddingHorizontal: 8

            }}>{item.label}</Text>
        </Animatable.View>
      </Animatable.View>
    </TouchableOpacity>

  )
}
const tab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.blue
        }

      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen name={item.route} component={item.component}
            options={{
              tabBarLabel: item.label,

              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons name={item.icon} size={24} color={color} />),
              tabBarButton: (props) => <TabButton {...props} item={item} />

            }} />
        )
      })}


    </Tab.Navigator>


























    // <Tab.Navigator
    //   activeColor="#000"
    //   inactiveColor="#ffff"
    //   barStyle={{ backgroundColor: '#0081C0' }}
    //   initialRouteName={"Home"}


    // >
    //   <Tab.Screen
    //     name="HOME"
    //     component={HomeActivity}

    //     options={{

    //       tabBarLabel: 'Home',

    //       tabBarIcon: ({ color }) => (
    //         <View style={{backgroundColor:'#000'}}>
    //         <MaterialCommunityIcons name='home-heart' color='#fff' size={26}
    //         />
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="SERVAY"
    //     component={SurveyActivity}
    //     options={{
    //       tabBarLabel: 'Servay',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="file-document" color='#fff' size={26} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="CLOCK"
    //     component={ClockActivity}
    //     options={{
    //       tabBarLabel: 'Clock',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="clock" color='#fff' size={26} />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="CART"
    //     component={CartActivity}
    //     options={{
    //       tabBarLabel: 'Cart',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="cart" color='#fff' size={26} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>

  );
};
export default tab;



