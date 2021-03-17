import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FormButton from '../Components/FormButton'
import FormInput from '../Components/FormInput'
import SocialButton from '../Components/SocialButton'
import auth from '@react-native-firebase/auth'

export default function Signup({ navigation }) {

    const [email, useEmail] = useState("")
    const [password, usePassword] = useState("")
    const [ConfirmPassword, useConfirmPassword] = useState("")


    SignUp = () => {
        if (email == "" || password == "" || ConfirmPassword == "") {
            Alert.alert("Enter required values")
        }
        else {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                    navigation.navigate('Login')
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    }

                    console.error(error);
                });
        }
    }
    return (

        <ScrollView style={styles.containerStyle}>
            <ImageBackground
                source={require('../assets/bg-img.jpg')}
                resizeMode='cover'
style={styles.bgStyle}
            >
            <Text style={styles.text}>Create an Account</Text>
            <FormInput
                labelValue={email}
                placeholderText="UserName"
                iconType="user"
                keyboardType="email-address"
                onChangeText={(email) => useEmail(email)}
            />
            <FormInput
                labelValue={password}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                //passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
                onChangeText={(password) => usePassword(password)}


            />
            <FormInput
                labelValue={ConfirmPassword}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
                //passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
                onChangeText={(password) => useConfirmPassword(password)}
            />

            <FormButton btnTitle="SignUp" onPress={() => this.SignUp()} />

            <View style={styles.socialBtn}>
                <SocialButton
                    iconName="facebook"
                    bgcolor="#3b5998"
                    btnText="Sign Up with Facebook"
                />
                <SocialButton
                    iconName="google"
                    bgcolor="#dd4b39"
                    btnText="Sign Up with Google"
                />
                <TouchableOpacity
                    // style={styles.forgotButton}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.navButtonText}>
                        Have an acount? Sign In
        </Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </ImageBackground>

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: '10%',
        display: 'flex',
        flex: 1
    },
    socialBtn: {
        display: 'flex',
        // marginTop: '8%',
        flexDirection: 'column',

    },
    forgotButton: {

        //marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    forgotButton: {
        // marginVertical: 35,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    bgStyle:{
    }
})
