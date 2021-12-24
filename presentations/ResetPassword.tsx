import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import Input from '../components/UI/Input';
import InputText from '../components/UI/InputText';
import LoginInput1 from '../components/UI/InputReser'; 


import Fonts from '../constants/Fonts';


import { Formik } from 'formik';
import * as yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';



const loginValidSchema = yup.object().shape({
  email: yup.string().email('Vui lòng nhập đúng Email')
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Email is required!!!'),
 
});

type authScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;
const ResetPassword = () => {

  const navigation = useNavigation<authScreenProp>();

  
  const [activeInput, setActiveInput] = useState(null);

  return (
    <Formik
      initialValues={{ email: '', pass: '' }}
      validateOnMount={true}
      onSubmit={values => navigation.navigate("Login")}
      validationSchema={loginValidSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <View style={styles.container}>
          
          <View style={styles.logocontainer}>
            <Image style={styles.Logo} source={require('../images/logo.png')} />
           
          </View>
          <Text style={styles.TextReset}>Vui lòng nhập Email để khôi phục</Text>
          <Text style={styles.TextReset2}>lại mật khẩu</Text>
          
          <LoginInput1 placeholder=''
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            >
          </LoginInput1>
          {(errors.email && touched.email)&&<Text style={styles.error}>{errors.email}</Text>}

          

          <View style={styles.ButtonReset}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}
          style={styles.buttonBack}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonTextBack}>Quay lại</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}
          style={styles.buttonContinue}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
        </View>
      )}</Formik>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  TextReset: {
    ...Fonts.h5,
    alignSelf: 'center',
    marginTop: 100,
  },
  TextReset2: {
    ...Fonts.h5,
    alignSelf: 'center',
  },
  logocontainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Logo: {
    width: 60,
    height: 60,
    marginTop:100
  },
  ButtonReset: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonBack: {
    backgroundColor: Colors.grey,
    height: 50,
    width: 186,
    marginTop: 84,
    borderRadius: 25,
    padding: 12,
    marginLeft: 4.5,
    marginRight: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    ...Fonts.h7,
    alignSelf: 'center',
  },
  buttonTextBack: {
    ...Fonts.h8,
    alignSelf: 'center',
  },
  buttonContinue: {
    backgroundColor: Colors.blue,
    height: 50,
    width: 186,
    marginLeft: 3,
    marginTop: 84,
    borderRadius: 25,
    padding: 12,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  error:{
    ...Fonts.h13,
    marginTop:5,
    alignSelf:"flex-end",
    marginRight:20,
  },
  errors:{
    borderWidth:1,
    borderColor:Colors.red,
  }
});
export default ResetPassword;
