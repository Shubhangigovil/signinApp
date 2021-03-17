import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
//import { windowHeight } from '../utils/Dimensions';


export default function FormButton({ btnTitle, ...rest }) {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest} >
            <Text style={styles.buttonText}>{btnTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '70%',
       // height: '10%',
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius: 10,
        
       // marginLeft:'10%'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
});
