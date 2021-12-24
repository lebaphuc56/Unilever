import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../constants/Colors'

interface Props {
  onChangeText:(text:string)=>void;
  }
export default function LoginInput({...ortherProps}){
    
    return(
        <View style={styles.container}>
        <TextInput
          style={{...styles.input
          }}
          {...ortherProps}
          ></TextInput>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
      },
      input: {
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        alignSelf: 'center',
        height: 50,
        width: 360,
        padding: 12,
      },
    
})
