import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../constants/Colors'

interface Props {
  onChangeText:(text:string)=>void;
    placeholder: any;
    value: any;
    onBlur: any;
    secureTextEntry: any;
  }
export default function LoginInput1({error,...ortherProps}){
    const validationColor = ()=>{
        if (error) {
            return Colors.red
        }else{
            return Colors.grey 
        }
    };

    return(
        <View style={styles.container}>
        <TextInput
          style={{...styles.input, borderWidth:1,borderColor:validationColor()
          }}
          {...ortherProps}
          ></TextInput>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
      },
      input: {
        
        backgroundColor: Colors.grey,
        borderRadius: 15,
        height: 50,
        margin: 10,
        color: 'red',
        padding: 10,
      },
      errorInput:{
        borderWidth:1,
        borderColor:Colors.red
      }
})