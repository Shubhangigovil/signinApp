import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
//import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function FormInput({ labelValue, placeholderText, iconType, ...rest }) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Icon name={iconType} size={25} color="#666"  />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
        textAlign='left'

      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    //justifyContent: 'center',
    alignSelf: 'center'

  },
  iconStyle: {
    padding: 5,
    
    // height: '100%',
    //   borderRightColor: '#ccc',
    //   borderRightWidth: 1,
    //width: 50,
  },
  input: {
    // height: '90%',
    width: '75%',
    padding: 10,
    flex: 1,
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'flex-start',
    marginLeft: '5%',
    alignItems: 'flex-start',
    // backgroundColor:'yellow'
  }
});

