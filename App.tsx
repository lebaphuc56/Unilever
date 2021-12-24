
import React from 'react';
import 'react-native-gesture-handler';
import Tab from './navigations/tab'
import History from './screens/listChose/Booking';
import Booking from './screens/listChose/Booking';
import Notification from './screens/listChose/Notification';
import Profile from './screens/listChose/Profile'
import ChangePassword from './screens/ProfileSetting/ChangePassword';
import NotificationSend from './presentations/NotificationSendActivity';
import CourseInformation from './screens/ProfileSetting/CourseInformation';
import EditInformation from './screens/ProfileSetting/EditInformation';
import Management from './screens/ProfileSetting/Management';
import Mywork_Stack from './screens/listChose/Mywork_Stack';
import Home from './presentations/HomeActivity';
import SurverPage1Activity from './presentations/SurverPage1Activity';
import SurverPage2Activity from './presentations/SurverPage2Activity';
import ResetPassword from './presentations/ResetPassword';
import Splash from './presentations/SplashActivity'
import ListHistory from './screens/ListHistory/History'
import ListDetaiHistory from './screens/ListHistory/DetaiHistory'
import ListNoteDetaiHistory from './screens/ListHistory/NoteDetaiHistory'
import DetailTask from './screens/listChose/DetailTask'
import DetaiNewsHome from './presentations/DetaiNewsHome'
import DetaiVideoHome from './presentations/DetaiVideoHome'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerContent from './presentations/DrawerContent';
import Login from './presentations/LoginActivity';
import CreateTask from './screens/listChose/CreateTask';


const Stack = createNativeStackNavigator();
const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tab" component={Tab} />
            <Stack.Screen name="Reset" component={ResetPassword} />
            <Stack.Screen name="DetaiNewsHome" component={DetaiNewsHome} />
            <Stack.Screen name="ListHistory" component={ListHistory} />
            <Stack.Screen name="ListDetaiHistory" component={ListDetaiHistory} />
            <Stack.Screen name="DetaiVideoHome" component={DetaiVideoHome} />
            <Stack.Screen name="ListNoteDetaiHistory" component={ListNoteDetaiHistory} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="Notifi" component={NotificationSend} />
            <Stack.Screen name="CreateTask" component={CreateTask} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="CourseInformation" component={CourseInformation} />
            <Stack.Screen name="EditInformation" component={EditInformation} />
            <Stack.Screen name="Management" component={Management} />
            <Stack.Screen name="Mywork_Stack" component={Mywork_Stack} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SurverPage1" component={SurverPage1Activity} />
            <Stack.Screen name="SurverPage2" component={SurverPage2Activity} />
            <Stack.Screen name="DetailTask" component={DetailTask} />


         </Stack.Navigator>

      </NavigationContainer>

   )
}
export default App;

function createDrawerNavigator() {
   throw new Error('Function not implemented.');
}