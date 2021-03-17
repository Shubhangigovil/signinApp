import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function SocialButton({ iconName, bgcolor, btnText, onPress, ...rest }) {
    return (
        <View style={styles.containerStyle}>
            <Icon.Button
                name={iconName}
                backgroundColor={bgcolor}
                style={styles.btnStyle}
            onPress={onPress}
            >
                <View style={{alignSelf:'center'}}>
                <Text style={styles.txtStyle}>
                    {btnText}
                </Text>
                </View>
            </Icon.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
       // height: '95%',
        width:'90%',
        justifyContent:'center',
        alignItems:'baseline',
       // backgroundColor:'yellow'
    },
    containerStyle: {
        justifyContent: 'center',
        width:'90%',
       // height:'25%',
        alignSelf:'center',
       // backgroundColor:'pink'
    },
    txtStyle:{
        fontFamily: 'Arial', fontSize: 20, color:'white',
         textAlignVertical:'center'
    }
})
